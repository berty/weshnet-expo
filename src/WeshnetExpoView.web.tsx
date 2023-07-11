import * as React from 'react';

import { WeshnetExpoViewProps } from './WeshnetExpo.types';

export default function WeshnetExpoView(props: WeshnetExpoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
