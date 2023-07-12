import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to WeshnetExpo.web.ts
// and on native platforms to WeshnetExpo.ts
import WeshnetExpoModule from './WeshnetExpoModule';

// Get the native constant value.
export const PI = WeshnetExpoModule.PI;

export function init(msg: string): string {
    return WeshnetExpoModule.helloGo(msg);
}

export function asyncResolve(msg: string): Promise<string> {
    return WeshnetExpoModule.asyncResolveGo(msg);
}

export async function asyncReject(): Promise<string> {
    return WeshnetExpoModule.asyncRejectGo();
}
