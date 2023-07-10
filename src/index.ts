import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to WeshnetExpo.web.ts
// and on native platforms to WeshnetExpo.ts
import WeshnetExpoModule from './WeshnetExpoModule';
import WeshnetExpoView from './WeshnetExpoView';
import { ChangeEventPayload, WeshnetExpoViewProps } from './WeshnetExpo.types';

// Get the native constant value.
export const PI = WeshnetExpoModule.PI;

export function hello(msg: string): string {
    return WeshnetExpoModule.helloGo(msg);
}

export function asyncResolve(msg: string): Promise<string> {
    return WeshnetExpoModule.asyncResolveGo(msg);
}

export async function asyncReject(): Promise<string> {
    return WeshnetExpoModule.asyncRejectGo();
}

export async function setValueAsync(value: string) {
  return await WeshnetExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(WeshnetExpoModule ?? NativeModulesProxy.WeshnetExpo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { WeshnetExpoView, WeshnetExpoViewProps, ChangeEventPayload };
