import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace rpcmanager. */
export namespace rpcmanager {

    /** Represents a RPCManager */
    class RPCManager extends $protobuf.rpc.Service {

        /**
         * Constructs a new RPCManager service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new RPCManager service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RPCManager;

        /**
         * Calls ClientInvokeUnary.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Reply
         */
        public clientInvokeUnary(request: rpcmanager.ClientInvokeUnary.IRequest, callback: rpcmanager.RPCManager.ClientInvokeUnaryCallback): void;

        /**
         * Calls ClientInvokeUnary.
         * @param request Request message or plain object
         * @returns Promise
         */
        public clientInvokeUnary(request: rpcmanager.ClientInvokeUnary.IRequest): Promise<rpcmanager.ClientInvokeUnary.Reply>;

        /**
         * Calls CreateClientStream.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Reply
         */
        public createClientStream(request: rpcmanager.ClientCreateStream.IRequest, callback: rpcmanager.RPCManager.CreateClientStreamCallback): void;

        /**
         * Calls CreateClientStream.
         * @param request Request message or plain object
         * @returns Promise
         */
        public createClientStream(request: rpcmanager.ClientCreateStream.IRequest): Promise<rpcmanager.ClientCreateStream.Reply>;

        /**
         * Calls ClientStreamSend.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Reply
         */
        public clientStreamSend(request: rpcmanager.ClientStreamSend.IRequest, callback: rpcmanager.RPCManager.ClientStreamSendCallback): void;

        /**
         * Calls ClientStreamSend.
         * @param request Request message or plain object
         * @returns Promise
         */
        public clientStreamSend(request: rpcmanager.ClientStreamSend.IRequest): Promise<rpcmanager.ClientStreamSend.Reply>;

        /**
         * Calls ClientStreamRecv.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Reply
         */
        public clientStreamRecv(request: rpcmanager.ClientStreamRecv.IRequest, callback: rpcmanager.RPCManager.ClientStreamRecvCallback): void;

        /**
         * Calls ClientStreamRecv.
         * @param request Request message or plain object
         * @returns Promise
         */
        public clientStreamRecv(request: rpcmanager.ClientStreamRecv.IRequest): Promise<rpcmanager.ClientStreamRecv.Reply>;

        /**
         * Calls ClientStreamClose.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Reply
         */
        public clientStreamClose(request: rpcmanager.ClientStreamClose.IRequest, callback: rpcmanager.RPCManager.ClientStreamCloseCallback): void;

        /**
         * Calls ClientStreamClose.
         * @param request Request message or plain object
         * @returns Promise
         */
        public clientStreamClose(request: rpcmanager.ClientStreamClose.IRequest): Promise<rpcmanager.ClientStreamClose.Reply>;

        /**
         * Calls ClientStreamCloseAndRecv.
         * @param request Request message or plain object
         * @param callback Node-style callback called with the error, if any, and Reply
         */
        public clientStreamCloseAndRecv(request: rpcmanager.ClientStreamCloseAndRecv.IRequest, callback: rpcmanager.RPCManager.ClientStreamCloseAndRecvCallback): void;

        /**
         * Calls ClientStreamCloseAndRecv.
         * @param request Request message or plain object
         * @returns Promise
         */
        public clientStreamCloseAndRecv(request: rpcmanager.ClientStreamCloseAndRecv.IRequest): Promise<rpcmanager.ClientStreamCloseAndRecv.Reply>;
    }

    namespace RPCManager {

        /**
         * Callback as used by {@link rpcmanager.RPCManager#clientInvokeUnary}.
         * @param error Error, if any
         * @param [response] Reply
         */
        type ClientInvokeUnaryCallback = (error: (Error|null), response?: rpcmanager.ClientInvokeUnary.Reply) => void;

        /**
         * Callback as used by {@link rpcmanager.RPCManager#createClientStream}.
         * @param error Error, if any
         * @param [response] Reply
         */
        type CreateClientStreamCallback = (error: (Error|null), response?: rpcmanager.ClientCreateStream.Reply) => void;

        /**
         * Callback as used by {@link rpcmanager.RPCManager#clientStreamSend}.
         * @param error Error, if any
         * @param [response] Reply
         */
        type ClientStreamSendCallback = (error: (Error|null), response?: rpcmanager.ClientStreamSend.Reply) => void;

        /**
         * Callback as used by {@link rpcmanager.RPCManager#clientStreamRecv}.
         * @param error Error, if any
         * @param [response] Reply
         */
        type ClientStreamRecvCallback = (error: (Error|null), response?: rpcmanager.ClientStreamRecv.Reply) => void;

        /**
         * Callback as used by {@link rpcmanager.RPCManager#clientStreamClose}.
         * @param error Error, if any
         * @param [response] Reply
         */
        type ClientStreamCloseCallback = (error: (Error|null), response?: rpcmanager.ClientStreamClose.Reply) => void;

        /**
         * Callback as used by {@link rpcmanager.RPCManager#clientStreamCloseAndRecv}.
         * @param error Error, if any
         * @param [response] Reply
         */
        type ClientStreamCloseAndRecvCallback = (error: (Error|null), response?: rpcmanager.ClientStreamCloseAndRecv.Reply) => void;
    }

    /** Properties of a ClientInvokeUnary. */
    interface IClientInvokeUnary {
    }

    /** Represents a ClientInvokeUnary. */
    class ClientInvokeUnary implements IClientInvokeUnary {

        /**
         * Constructs a new ClientInvokeUnary.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IClientInvokeUnary);

        /**
         * Creates a new ClientInvokeUnary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientInvokeUnary instance
         */
        public static create(properties?: rpcmanager.IClientInvokeUnary): rpcmanager.ClientInvokeUnary;

        /**
         * Encodes the specified ClientInvokeUnary message. Does not implicitly {@link rpcmanager.ClientInvokeUnary.verify|verify} messages.
         * @param message ClientInvokeUnary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IClientInvokeUnary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientInvokeUnary message, length delimited. Does not implicitly {@link rpcmanager.ClientInvokeUnary.verify|verify} messages.
         * @param message ClientInvokeUnary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IClientInvokeUnary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientInvokeUnary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientInvokeUnary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientInvokeUnary;

        /**
         * Decodes a ClientInvokeUnary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientInvokeUnary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientInvokeUnary;

        /**
         * Verifies a ClientInvokeUnary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientInvokeUnary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientInvokeUnary
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.ClientInvokeUnary;

        /**
         * Creates a plain object from a ClientInvokeUnary message. Also converts values to other types if specified.
         * @param message ClientInvokeUnary
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.ClientInvokeUnary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientInvokeUnary to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientInvokeUnary
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientInvokeUnary {

        /** Properties of a Request. */
        interface IRequest {

            /** Request methodDesc */
            methodDesc?: (rpcmanager.IMethodDesc|null);

            /** Request payload */
            payload?: (Uint8Array|null);

            /** Request header */
            header?: (rpcmanager.IMetadata[]|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientInvokeUnary.IRequest);

            /** Request methodDesc. */
            public methodDesc?: (rpcmanager.IMethodDesc|null);

            /** Request payload. */
            public payload: Uint8Array;

            /** Request header. */
            public header: rpcmanager.IMetadata[];

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: rpcmanager.ClientInvokeUnary.IRequest): rpcmanager.ClientInvokeUnary.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link rpcmanager.ClientInvokeUnary.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientInvokeUnary.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link rpcmanager.ClientInvokeUnary.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientInvokeUnary.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientInvokeUnary.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientInvokeUnary.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientInvokeUnary.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientInvokeUnary.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Request
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply payload */
            payload?: (Uint8Array|null);

            /** Reply trailer */
            trailer?: (rpcmanager.IMetadata[]|null);

            /** Reply error */
            error?: (rpcmanager.IError|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientInvokeUnary.IReply);

            /** Reply payload. */
            public payload: Uint8Array;

            /** Reply trailer. */
            public trailer: rpcmanager.IMetadata[];

            /** Reply error. */
            public error?: (rpcmanager.IError|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: rpcmanager.ClientInvokeUnary.IReply): rpcmanager.ClientInvokeUnary.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link rpcmanager.ClientInvokeUnary.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientInvokeUnary.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link rpcmanager.ClientInvokeUnary.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientInvokeUnary.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientInvokeUnary.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientInvokeUnary.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientInvokeUnary.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientInvokeUnary.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientCreateStream. */
    interface IClientCreateStream {
    }

    /** Represents a ClientCreateStream. */
    class ClientCreateStream implements IClientCreateStream {

        /**
         * Constructs a new ClientCreateStream.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IClientCreateStream);

        /**
         * Creates a new ClientCreateStream instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientCreateStream instance
         */
        public static create(properties?: rpcmanager.IClientCreateStream): rpcmanager.ClientCreateStream;

        /**
         * Encodes the specified ClientCreateStream message. Does not implicitly {@link rpcmanager.ClientCreateStream.verify|verify} messages.
         * @param message ClientCreateStream message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IClientCreateStream, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientCreateStream message, length delimited. Does not implicitly {@link rpcmanager.ClientCreateStream.verify|verify} messages.
         * @param message ClientCreateStream message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IClientCreateStream, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientCreateStream message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientCreateStream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientCreateStream;

        /**
         * Decodes a ClientCreateStream message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientCreateStream
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientCreateStream;

        /**
         * Verifies a ClientCreateStream message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientCreateStream message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientCreateStream
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.ClientCreateStream;

        /**
         * Creates a plain object from a ClientCreateStream message. Also converts values to other types if specified.
         * @param message ClientCreateStream
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.ClientCreateStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientCreateStream to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientCreateStream
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientCreateStream {

        /** Properties of a Request. */
        interface IRequest {

            /** Request methodDesc */
            methodDesc?: (rpcmanager.IMethodDesc|null);

            /** Request payload */
            payload?: (Uint8Array|null);

            /** Request header */
            header?: (rpcmanager.IMetadata[]|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientCreateStream.IRequest);

            /** Request methodDesc. */
            public methodDesc?: (rpcmanager.IMethodDesc|null);

            /** Request payload. */
            public payload: Uint8Array;

            /** Request header. */
            public header: rpcmanager.IMetadata[];

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: rpcmanager.ClientCreateStream.IRequest): rpcmanager.ClientCreateStream.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link rpcmanager.ClientCreateStream.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientCreateStream.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link rpcmanager.ClientCreateStream.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientCreateStream.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientCreateStream.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientCreateStream.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientCreateStream.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientCreateStream.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Request
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply streamId */
            streamId?: (string|null);

            /** Reply trailer */
            trailer?: (rpcmanager.IMetadata[]|null);

            /** Reply error */
            error?: (rpcmanager.IError|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientCreateStream.IReply);

            /** Reply streamId. */
            public streamId: string;

            /** Reply trailer. */
            public trailer: rpcmanager.IMetadata[];

            /** Reply error. */
            public error?: (rpcmanager.IError|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: rpcmanager.ClientCreateStream.IReply): rpcmanager.ClientCreateStream.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link rpcmanager.ClientCreateStream.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientCreateStream.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link rpcmanager.ClientCreateStream.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientCreateStream.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientCreateStream.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientCreateStream.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientCreateStream.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientCreateStream.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientStreamSend. */
    interface IClientStreamSend {
    }

    /** Represents a ClientStreamSend. */
    class ClientStreamSend implements IClientStreamSend {

        /**
         * Constructs a new ClientStreamSend.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IClientStreamSend);

        /**
         * Creates a new ClientStreamSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamSend instance
         */
        public static create(properties?: rpcmanager.IClientStreamSend): rpcmanager.ClientStreamSend;

        /**
         * Encodes the specified ClientStreamSend message. Does not implicitly {@link rpcmanager.ClientStreamSend.verify|verify} messages.
         * @param message ClientStreamSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IClientStreamSend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamSend message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamSend.verify|verify} messages.
         * @param message ClientStreamSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IClientStreamSend, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamSend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamSend;

        /**
         * Decodes a ClientStreamSend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamSend;

        /**
         * Verifies a ClientStreamSend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamSend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamSend
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamSend;

        /**
         * Creates a plain object from a ClientStreamSend message. Also converts values to other types if specified.
         * @param message ClientStreamSend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.ClientStreamSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamSend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamSend
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientStreamSend {

        /** Properties of a Request. */
        interface IRequest {

            /** Request streamId */
            streamId?: (string|null);

            /** Request payload */
            payload?: (Uint8Array|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamSend.IRequest);

            /** Request streamId. */
            public streamId: string;

            /** Request payload. */
            public payload: Uint8Array;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: rpcmanager.ClientStreamSend.IRequest): rpcmanager.ClientStreamSend.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link rpcmanager.ClientStreamSend.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamSend.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamSend.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamSend.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamSend.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamSend.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamSend.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Request
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply streamId */
            streamId?: (string|null);

            /** Reply trailer */
            trailer?: (rpcmanager.IMetadata[]|null);

            /** Reply error */
            error?: (rpcmanager.IError|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamSend.IReply);

            /** Reply streamId. */
            public streamId: string;

            /** Reply trailer. */
            public trailer: rpcmanager.IMetadata[];

            /** Reply error. */
            public error?: (rpcmanager.IError|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: rpcmanager.ClientStreamSend.IReply): rpcmanager.ClientStreamSend.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link rpcmanager.ClientStreamSend.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamSend.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamSend.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamSend.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamSend.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamSend.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamSend.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientStreamRecv. */
    interface IClientStreamRecv {
    }

    /** Represents a ClientStreamRecv. */
    class ClientStreamRecv implements IClientStreamRecv {

        /**
         * Constructs a new ClientStreamRecv.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IClientStreamRecv);

        /**
         * Creates a new ClientStreamRecv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamRecv instance
         */
        public static create(properties?: rpcmanager.IClientStreamRecv): rpcmanager.ClientStreamRecv;

        /**
         * Encodes the specified ClientStreamRecv message. Does not implicitly {@link rpcmanager.ClientStreamRecv.verify|verify} messages.
         * @param message ClientStreamRecv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IClientStreamRecv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamRecv message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamRecv.verify|verify} messages.
         * @param message ClientStreamRecv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IClientStreamRecv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamRecv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamRecv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamRecv;

        /**
         * Decodes a ClientStreamRecv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamRecv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamRecv;

        /**
         * Verifies a ClientStreamRecv message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamRecv message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamRecv
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamRecv;

        /**
         * Creates a plain object from a ClientStreamRecv message. Also converts values to other types if specified.
         * @param message ClientStreamRecv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.ClientStreamRecv, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamRecv to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamRecv
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientStreamRecv {

        /** Properties of a Request. */
        interface IRequest {

            /** Request streamId */
            streamId?: (string|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamRecv.IRequest);

            /** Request streamId. */
            public streamId: string;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: rpcmanager.ClientStreamRecv.IRequest): rpcmanager.ClientStreamRecv.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link rpcmanager.ClientStreamRecv.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamRecv.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamRecv.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamRecv.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamRecv.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamRecv.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamRecv.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamRecv.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Request
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply streamId */
            streamId?: (string|null);

            /** Reply payload */
            payload?: (Uint8Array|null);

            /** Reply trailer */
            trailer?: (rpcmanager.IMetadata[]|null);

            /** Reply error */
            error?: (rpcmanager.IError|null);

            /** Reply eof */
            eof?: (boolean|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamRecv.IReply);

            /** Reply streamId. */
            public streamId: string;

            /** Reply payload. */
            public payload: Uint8Array;

            /** Reply trailer. */
            public trailer: rpcmanager.IMetadata[];

            /** Reply error. */
            public error?: (rpcmanager.IError|null);

            /** Reply eof. */
            public eof: boolean;

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: rpcmanager.ClientStreamRecv.IReply): rpcmanager.ClientStreamRecv.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link rpcmanager.ClientStreamRecv.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamRecv.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamRecv.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamRecv.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamRecv.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamRecv.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamRecv.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamRecv.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientStreamClose. */
    interface IClientStreamClose {
    }

    /** Represents a ClientStreamClose. */
    class ClientStreamClose implements IClientStreamClose {

        /**
         * Constructs a new ClientStreamClose.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IClientStreamClose);

        /**
         * Creates a new ClientStreamClose instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamClose instance
         */
        public static create(properties?: rpcmanager.IClientStreamClose): rpcmanager.ClientStreamClose;

        /**
         * Encodes the specified ClientStreamClose message. Does not implicitly {@link rpcmanager.ClientStreamClose.verify|verify} messages.
         * @param message ClientStreamClose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IClientStreamClose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamClose message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamClose.verify|verify} messages.
         * @param message ClientStreamClose message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IClientStreamClose, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamClose message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamClose;

        /**
         * Decodes a ClientStreamClose message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamClose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamClose;

        /**
         * Verifies a ClientStreamClose message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamClose message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamClose
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamClose;

        /**
         * Creates a plain object from a ClientStreamClose message. Also converts values to other types if specified.
         * @param message ClientStreamClose
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.ClientStreamClose, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamClose to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamClose
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientStreamClose {

        /** Properties of a Request. */
        interface IRequest {

            /** Request streamId */
            streamId?: (string|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamClose.IRequest);

            /** Request streamId. */
            public streamId: string;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: rpcmanager.ClientStreamClose.IRequest): rpcmanager.ClientStreamClose.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link rpcmanager.ClientStreamClose.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamClose.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamClose.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamClose.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamClose.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamClose.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamClose.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamClose.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Request
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply streamId */
            streamId?: (string|null);

            /** Reply trailer */
            trailer?: (rpcmanager.IMetadata[]|null);

            /** Reply error */
            error?: (rpcmanager.IError|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamClose.IReply);

            /** Reply streamId. */
            public streamId: string;

            /** Reply trailer. */
            public trailer: rpcmanager.IMetadata[];

            /** Reply error. */
            public error?: (rpcmanager.IError|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: rpcmanager.ClientStreamClose.IReply): rpcmanager.ClientStreamClose.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link rpcmanager.ClientStreamClose.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamClose.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamClose.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamClose.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamClose.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamClose.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamClose.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamClose.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a ClientStreamCloseAndRecv. */
    interface IClientStreamCloseAndRecv {
    }

    /** Represents a ClientStreamCloseAndRecv. */
    class ClientStreamCloseAndRecv implements IClientStreamCloseAndRecv {

        /**
         * Constructs a new ClientStreamCloseAndRecv.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IClientStreamCloseAndRecv);

        /**
         * Creates a new ClientStreamCloseAndRecv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientStreamCloseAndRecv instance
         */
        public static create(properties?: rpcmanager.IClientStreamCloseAndRecv): rpcmanager.ClientStreamCloseAndRecv;

        /**
         * Encodes the specified ClientStreamCloseAndRecv message. Does not implicitly {@link rpcmanager.ClientStreamCloseAndRecv.verify|verify} messages.
         * @param message ClientStreamCloseAndRecv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IClientStreamCloseAndRecv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientStreamCloseAndRecv message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamCloseAndRecv.verify|verify} messages.
         * @param message ClientStreamCloseAndRecv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IClientStreamCloseAndRecv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientStreamCloseAndRecv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientStreamCloseAndRecv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamCloseAndRecv;

        /**
         * Decodes a ClientStreamCloseAndRecv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientStreamCloseAndRecv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamCloseAndRecv;

        /**
         * Verifies a ClientStreamCloseAndRecv message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientStreamCloseAndRecv message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientStreamCloseAndRecv
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamCloseAndRecv;

        /**
         * Creates a plain object from a ClientStreamCloseAndRecv message. Also converts values to other types if specified.
         * @param message ClientStreamCloseAndRecv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.ClientStreamCloseAndRecv, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientStreamCloseAndRecv to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientStreamCloseAndRecv
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientStreamCloseAndRecv {

        /** Properties of a Request. */
        interface IRequest {

            /** Request streamId */
            streamId?: (string|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamCloseAndRecv.IRequest);

            /** Request streamId. */
            public streamId: string;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: rpcmanager.ClientStreamCloseAndRecv.IRequest): rpcmanager.ClientStreamCloseAndRecv.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link rpcmanager.ClientStreamCloseAndRecv.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamCloseAndRecv.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamCloseAndRecv.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamCloseAndRecv.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamCloseAndRecv.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamCloseAndRecv.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamCloseAndRecv.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamCloseAndRecv.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Request
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply streamId */
            streamId?: (string|null);

            /** Reply payload */
            payload?: (Uint8Array|null);

            /** Reply trailer */
            trailer?: (rpcmanager.IMetadata[]|null);

            /** Reply error */
            error?: (rpcmanager.IError|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: rpcmanager.ClientStreamCloseAndRecv.IReply);

            /** Reply streamId. */
            public streamId: string;

            /** Reply payload. */
            public payload: Uint8Array;

            /** Reply trailer. */
            public trailer: rpcmanager.IMetadata[];

            /** Reply error. */
            public error?: (rpcmanager.IError|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: rpcmanager.ClientStreamCloseAndRecv.IReply): rpcmanager.ClientStreamCloseAndRecv.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link rpcmanager.ClientStreamCloseAndRecv.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: rpcmanager.ClientStreamCloseAndRecv.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link rpcmanager.ClientStreamCloseAndRecv.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: rpcmanager.ClientStreamCloseAndRecv.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.ClientStreamCloseAndRecv.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.ClientStreamCloseAndRecv.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): rpcmanager.ClientStreamCloseAndRecv.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: rpcmanager.ClientStreamCloseAndRecv.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a MethodDesc. */
    interface IMethodDesc {

        /** MethodDesc name */
        name?: (string|null);

        /** MethodDesc isClientStream */
        isClientStream?: (boolean|null);

        /** MethodDesc isServerStream */
        isServerStream?: (boolean|null);
    }

    /** Represents a MethodDesc. */
    class MethodDesc implements IMethodDesc {

        /**
         * Constructs a new MethodDesc.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IMethodDesc);

        /** MethodDesc name. */
        public name: string;

        /** MethodDesc isClientStream. */
        public isClientStream: boolean;

        /** MethodDesc isServerStream. */
        public isServerStream: boolean;

        /**
         * Creates a new MethodDesc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MethodDesc instance
         */
        public static create(properties?: rpcmanager.IMethodDesc): rpcmanager.MethodDesc;

        /**
         * Encodes the specified MethodDesc message. Does not implicitly {@link rpcmanager.MethodDesc.verify|verify} messages.
         * @param message MethodDesc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IMethodDesc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MethodDesc message, length delimited. Does not implicitly {@link rpcmanager.MethodDesc.verify|verify} messages.
         * @param message MethodDesc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IMethodDesc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MethodDesc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MethodDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.MethodDesc;

        /**
         * Decodes a MethodDesc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MethodDesc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.MethodDesc;

        /**
         * Verifies a MethodDesc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MethodDesc message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MethodDesc
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.MethodDesc;

        /**
         * Creates a plain object from a MethodDesc message. Also converts values to other types if specified.
         * @param message MethodDesc
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.MethodDesc, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MethodDesc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MethodDesc
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata key */
        key?: (string|null);

        /** Metadata values */
        values?: (string[]|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IMetadata);

        /** Metadata key. */
        public key: string;

        /** Metadata values. */
        public values: string[];

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: rpcmanager.IMetadata): rpcmanager.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link rpcmanager.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link rpcmanager.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Metadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Error. */
    interface IError {

        /** Error grpcErrorCode */
        grpcErrorCode?: (rpcmanager.GRPCErrCode|null);

        /** Error message */
        message?: (string|null);

        /** Error eof */
        eof?: (boolean|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpcmanager.IError);

        /** Error grpcErrorCode. */
        public grpcErrorCode: rpcmanager.GRPCErrCode;

        /** Error message. */
        public message: string;

        /** Error eof. */
        public eof: boolean;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: rpcmanager.IError): rpcmanager.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link rpcmanager.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpcmanager.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link rpcmanager.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpcmanager.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpcmanager.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpcmanager.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): rpcmanager.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpcmanager.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Error
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** GRPCErrCode enum. */
    enum GRPCErrCode {
        OK = 0,
        CANCELED = 1,
        UNKNOWN = 2,
        INVALID_ARGUMENT = 3,
        DEADLINE_EXCEEDED = 4,
        NOT_FOUND = 5,
        ALREADY_EXISTS = 6,
        PERMISSION_DENIED = 7,
        RESOURCE_EXHAUSTED = 8,
        FAILED_PRECONDITION = 9,
        ABORTED = 10,
        OUT_OF_RANGE = 11,
        UNIMPLEMENTED = 12,
        INTERNAL = 13,
        UNAVAILABLE = 14,
        DATA_LOSS = 15,
        UNAUTHENTICATED = 16
    }
}
