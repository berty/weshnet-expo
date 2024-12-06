// import { weshnet as protocolpb } from "./protocoltypes.pb";
// import { rpcmanager as rpcmanagerpb } from "./rpcmanager.pb";
//
// export const protocol: typeof protocolpb.protocol.v1 = (
//   protocolpb as any
// ).lookup("weshnet.protocol.v1");
// export const rpcmanager: typeof rpcmanagerpb = (rpcmanagerpb as any).lookup(
//   "rpcmanager",
// );
//
// export default { protocol, rpcmanager };
// export { weshnet } from "./protocoltypes.pb";
// export { rpcmanager } from "./rpcmanager.pb";
//

import * as pbjs from "protobufjs";
// import type { rpcmanager as rpcmanagerpb } from "./index.d";
// import type { protocol as protocolpb } from "./index.d";

var protocol;
var rpcmanager;

pbjs.load("./protocoltypes.pb.js", (err, root) => {
  if (!root) {
    console.error(err);
    return;
  }

  protocol = root.lookup("weshnet.protocol.v1");
  rpcmanager = root.lookup("rpcmanager");
});

export { protocol, rpcmanager };
