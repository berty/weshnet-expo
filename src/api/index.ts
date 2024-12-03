import { weshnet as protocolpb } from "./protocoltypes.pb";
import { rpcmanager as rpcmanagerpb } from "./rpcmanager.pb";

export const protocol: typeof protocolpb.protocol.v1 = (
  protocolpb as any
).lookup("weshnet.protocol.v1");
export const rpcmanager: typeof rpcmanagerpb = (rpcmanagerpb as any).lookup(
  "rpcmanager",
);

// const protocol = pbp
// const rpcmanager = rpcmanager
export default { protocol, rpcmanager };
