import { default as protocolpb }  from './protocoltypes.pb'
import { default as rpcmanagerpb } from './rpcmanager.pb'

const protocol: typeof protocolpb.weshnet.protocol.v1 = (protocolpb as any).lookup('weshnet.protocol.v1')
const rpcmanager: typeof rpcmanagerpb.rpcmanager = (rpcmanagerpb as any).lookup('rpcmanager')

// const protocol = pbp
// const rpcmanager = rpcmanager
export { protocol, rpcmanager }
