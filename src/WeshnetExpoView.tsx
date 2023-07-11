import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { WeshnetExpoViewProps } from './WeshnetExpo.types';

const NativeView: React.ComponentType<WeshnetExpoViewProps> =
  requireNativeViewManager('WeshnetExpo');

export default function WeshnetExpoView(props: WeshnetExpoViewProps) {
  return <NativeView {...props} />;
}
