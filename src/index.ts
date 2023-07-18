// import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to WeshnetExpo.web.ts
// and on native platforms to WeshnetExpo.ts
import WeshnetExpoModule from './WeshnetExpoModule';
import { protocol, rpcmanager } from './api'
import { rpcBridgeImpl, rpcNativeImpl } from './rpc'
import { createServiceClient } from './service'

// Get the native constant value.
// export const PI = WeshnetExpoModule.PI;

export function init(): any {
    return WeshnetExpoModule.init()
        .then(() => WeshnetExpoModule.init())
        .then(() => createServiceClient(protocol.ProtocolService, rpcBridgeImpl))
        .catch((err: any) => console.error('init error', err))
}

export function getRpcNative(): any {
    return WeshnetExpoModule.init()
        .then(() => createServiceClient(rpcmanager.RPCManager, rpcNativeImpl))
        .catch((err: any) => console.error('init error', err))

}
