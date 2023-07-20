import { default as protocolpb }  from './protocoltypes.pb'
import { default as rpcmanagerpb } from './rpcmanager.pb'

export const protocol: typeof protocolpb.weshnet.protocol.v1 = (protocolpb as any).lookup('weshnet.protocol.v1')
export const rpcmanager: typeof rpcmanagerpb.rpcmanager = (rpcmanagerpb as any).lookup('rpcmanager')

// const protocol = pbp
// const rpcmanager = rpcmanager
export default { protocol, rpcmanager }
