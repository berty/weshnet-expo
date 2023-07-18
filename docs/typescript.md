# Typescript Types

In order to use the Wesh Network Expo Module with Typescript, we need to generate the types for the module.

This document gives you an overview of the process.

## Overview of the process

Our goal is to generate the types for the Wesh Network Expo Module.
For sure we have a Makefile to generate the types, but we need to understand how it works.
Here goes a quick overview of the process:

1. generate Proto files using [protobufjs-cli](https://www.npmjs.com/package/protobufjs-cli)

    ```sh
    make src/api/protocoltypes.pb.d.ts
    ```

    proto files are generated in `api/protocoltypes.proto`

2. load Proto files using [protobufjs](https://protobufjs.github.io/protobuf.js/)

    ```js
    import pbjs from 'protobufjs'

    const pb = pbjs.loadSync('api/protocoltypes.proto')
    ```

3. generate TS using ge-clients.js script

    ```sh
    node gen-clients.js > src/api/weshnet.types.gen.ts
    ```

4. TS types are generated in `src/api/weshnet.types.gen.ts`
