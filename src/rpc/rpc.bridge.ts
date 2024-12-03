import * as pbjs from "protobufjs";

import rpcNative from "./rpc.native";
import { getServiceName } from "./utils";
import api from "../api";
import { rpcmanager } from "../api/index.d";
import { GRPCError, EOF } from "../error";
import { createServiceClient } from "../service";
// import { ServiceClientType } from '../welsh-clients.gen'

const ErrStreamClientAlreadyStarted = new GRPCError({
  // grpcErrorCode: beapi.bridge.GRPCErrCode.CANCELED,
  message: "client stream not started or has been closed",
});

const makeStreamClient = <M extends pbjs.Method>(
  streamid: string,
  method: M,
  bridgeClient: any,
) => {
  const eventEmitter = {
    events: [] as ((...a: unknown[]) => void)[],
    started: false,

    _publish(...args: unknown[]) {
      this.events.forEach((listener) => listener.apply(this, args));
    },
    onMessage(listener: (...a: unknown[]) => void) {
      this.events.push(listener);
    },
    async emit(payload: Uint8Array) {
      const response = await bridgeClient.clientStreamSend({
        streamId: streamid,
        payload,
      });

      // check for error
      if (response.error) {
        const grpcerr = new GRPCError(response.error);
        if (!grpcerr.OK) {
          throw grpcerr;
        }
      }
    },
    async start() {
      if (this.started) {
        throw ErrStreamClientAlreadyStarted;
      }
      this.started = true;

      let response: rpcmanager.ClientStreamRecv.Reply;

      for (;;) {
        response = await bridgeClient.clientStreamRecv({ streamId: streamid });
        const grpcerr = new GRPCError(response.error);
        if (!grpcerr.OK) {
          this._publish(null, grpcerr);
          return;
        }

        this._publish(response.payload, null);
      }
    },
    async stop() {
      if (!this.started) {
        throw ErrStreamClientAlreadyStarted;
      }

      const response = await bridgeClient.clientStreamClose({
        streamId: streamid,
      });
      const grpcerr = new GRPCError(response.error);
      if (!grpcerr.OK) {
        this._publish(null, grpcerr);
        return;
      }

      return;
    },
    async stopAndRecv() {
      if (this.started) {
        throw ErrStreamClientAlreadyStarted;
      }

      const response = await bridgeClient.clientStreamCloseAndRecv({
        streamId: streamid,
      });
      const grpcerr = new GRPCError(response.error);
      if (!grpcerr.OK) {
        this._publish(null, grpcerr);
        return;
      }

      const payload = method.resolvedResponseType?.decode(response.payload);
      return payload;
    },
  };

  return {
    __proto__: eventEmitter,
    events: [],
    started: false,
  };
};

const unary =
  (bridgeClient: any) =>
  async <M extends pbjs.Method>(
    method: M,
    request: Uint8Array,
    _metadata?: never,
  ) => {
    const methodDesc = {
      name: `/${getServiceName(method)}/${method.name}`,
    };

    const response = await bridgeClient.clientInvokeUnary({
      methodDesc: methodDesc,
      payload: request,
      // metadata: {}, // @TODO: pass metdate object
    });
    const grpcerr = new GRPCError(response.error);
    if (!grpcerr.OK) {
      throw grpcerr;
    }

    return response.payload;
  };

const stream =
  (bridgeClient: any) =>
  async <M extends pbjs.Method>(
    method: M,
    request: Uint8Array,
    _metadata?: never,
  ) => {
    const methodDesc = {
      name: `/${getServiceName(method)}/${method.name}`,

      isClientStream: !!method.requestStream,
      isServerStream: !!method.responseStream,
    };

    const response = await bridgeClient.createClientStream({
      methodDesc: methodDesc,
      payload: request,
      // metadata: {},
    });

    const grpcerr = new GRPCError(response.error);
    if (!grpcerr.OK) {
      throw grpcerr.EOF ? EOF : grpcerr;
    }

    return makeStreamClient(response.streamId, method, bridgeClient);
  };

const client = (bridgeClient: any) => ({
  unaryCall: unary(bridgeClient),
  streamCall: stream(bridgeClient),
});

const bridgeClient = createServiceClient(api.rpcmanager.RPCManager, rpcNative);
export default client(bridgeClient);
