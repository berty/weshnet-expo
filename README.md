<h1 align="center">
  <img src="https://wesh.network/img/LogoCubes.svg" alt="Berty" title="Berty" height="100px" />
</h1>
<h1 align="center">
Wesh Network Expo Module
</h1>
<h2>
<mark>🚧 This project is work In Progress. This library cannot be used yet.</mark>
</h2>
<p align="center">
    <a href="https://crpt.fyi/berty-discord"><img alt="discord" src="https://img.shields.io/badge/discord-gray?logo=discord" /></a>
    <a href="https://github.com/berty"><img alt="github" src="https://img.shields.io/badge/@berty-471961?logo=github" /></a>
    <a href="https://twitter.com/weshnet"><img alt="twitter" src="https://img.shields.io/twitter/follow/berty?label=%40weshnet&style=flat&logo=twitter" /></a>
</p>

<h3 align="center">The Wesh network toolkit lets your application use the Wesh protocol to support privacy-based, off-grid, peer-to-peer communication.
<br/><br/>For details, see the Wesh website at <a href="https://wesh.network">https://wesh.network</a>. The website includes blog tutorials which introduce you to Wesh and walk you through some example applications and background of the Wesh protocol.</h3>

---

## Requirements

-   [Go](https://golang.org/doc/install) = 1.22.4

Follow the [React Native requirements](https://reactnative.dev/docs/set-up-your-environment) and [Expo requirements](https://docs.expo.dev/get-started/set-up-your-environment) for your platform.

## Instalation

Install the package in your project:

```sh
# create new expo project
npx create-expo-app my-app --template expo-template-blank-typescript
cd my-app
npx expo install @berty/weshnet-expo
```

## Usage

Add the following to your `App.tsx`:

```tsx
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import * as WeshnetExpo from "@berty/weshnet-expo";

export default function App() {
    const [peerID, setPeerID] = useState<string>();
    useEffect(() => {
        WeshnetExpo.init().then((client) => {
            client.serviceGetConfiguration({}).then((res) => {
                setPeerID(res.peerId);
                console.log(res);
            });
        });
    }, []);

    const loadingView = <Text> Loading Weshnet... </Text>;
    const weshView = <Text>hello my peerid is: {peerID}</Text>;
    return (
        <View style={styles.container}>{!peerID ? loadingView : weshView}</View>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
    });
}
```

`weshnet` needs some system permissions to get the phone's connectivity status and make `mDNS` working. Edit your `app.json` to include the following permissions:

```json
{
    "expo": {
        "android": {
            "permissions": [
                "android.permission.READ_PHONE_STATE",
                "android.permission.ACCESS_NETWORK_STATE",
                "android.permission.CHANGE_WIFI_MULTICAST_STATE"
            ]
        }
    }
}
```

You need to update your native Android / iOS folders. If you have a `managed workflow` (learn more [here](https://medium.com/@mehro_z/choosing-between-managed-and-bare-workflow-in-expo-a-comprehensive-difference-7086305f1480)), do the following (this command will delete and recreate the native folders!!!)

```sh
npx expo prebuild --clean
```

## Example App

```sh
cd example
make build.ios # or make build.android
```

## Contributing

[![Contribute to Berty](https://assets.berty.tech/files/contribute-contribute_v2--Contribute-berty-ultra-light.gif)](https://github.com/berty/community)

If you want to help out, please see [docs/developer-guide.md](./docs/developer-guide.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).

This repository falls under the Berty [Code of Conduct](https://github.com/berty/community/blob/master/CODE_OF_CONDUCT.md).

You can contact us on the [`#questions-❓`](https://crpt.fyi/berty-dev-discord) channel on [discord](https://crpt.fyi/berty-discord).

## License

Dual-licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) and [MIT](https://opensource.org/licenses/MIT) terms.

`SPDX-License-Identifier: (Apache-2.0 OR MIT)`

See the [COPYRIGHT](./COPYRIGHT) file for more details.
