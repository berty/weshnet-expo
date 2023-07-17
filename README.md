<h1 align="center">
  <img src="https://wesh.network/img/LogoCubes.svg" alt="Berty" title="Berty" height="100px" />
</h1>
<h1 align="center">
Wesh Network Expo Module
</h1>
<p align="center">
    <a href="https://crpt.fyi/berty-discord"><img alt="discord" src="https://img.shields.io/badge/discord-gray?logo=discord" /></a>
    <a href="https://github.com/berty"><img alt="github" src="https://img.shields.io/badge/@berty-471961?logo=github" /></a>
    <a href="https://twitter.com/weshnet"><img alt="twitter" src="https://img.shields.io/twitter/follow/berty?label=%40weshnet&style=flat&logo=twitter" /></a>
</p>

<h3 align="center">The Wesh network toolkit lets your application use the Wesh protocol to support privacy-based, off-grid, peer-to-peer communication.  
<br/><br/>For details, see the Wesh website at <a href="https://wesh.network">https://wesh.network</a>. The website includes blog tutorials which introduce you to Wesh and walk you through some example applications and background of the Wesh protocol.</h3>

---

## Requirements

- [Go](https://golang.org/doc/install) >= 1.19.7
## Instalation

Install the package in your project:

```sh
    # Expose ios and android native modules
    # Ignore this step if you already have the 'ios' and 'android' folders in your project.
    $ npx expo prebuild 

    # Install the package
    $ npx expo install @weshnet/expo

    # Install the pods (it will run gomobile bind)
    $ cd ios && pod install

    # Run the app
    $ npx expo run:ios
```

## Usage

Add the following to your `App.js`:

```tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as WeshnetExpo from '@weshnet/expo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{WeshnetExpo.hello('berty')}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

## Contributing

[![Contribute to Berty](https://assets.berty.tech/files/contribute-contribute_v2--Contribute-berty-ultra-light.gif)](https://github.com/berty/community)

If you want to help out, please see [docs/developer-guide.md](./docs/developer-guide.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).

This repository falls under the Berty [Code of Conduct](https://github.com/berty/community/blob/master/CODE_OF_CONDUCT.md).

You can contact us on the [`#dev-💻`](https://crpt.fyi/berty-dev-discord) channel on [discord](https://crpt.fyi/berty-discord).

## License

Dual-licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) and [MIT](https://opensource.org/licenses/MIT) terms.

`SPDX-License-Identifier: (Apache-2.0 OR MIT)`

See the [COPYRIGHT](./COPYRIGHT) file for more details.
