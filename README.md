<h1 align="center">
Wesh Network Expo Module
</h1>
<p align="center">
    <a href="https://crpt.fyi/berty-discord"><img alt="discord" src="https://img.shields.io/badge/discord-gray?logo=discord" /></a>
    <a href="https://github.com/berty"><img alt="github" src="https://img.shields.io/badge/@berty-471961?logo=github" /></a>
    <a href="https://twitter.com/weshnet"><img alt="twitter" src="https://img.shields.io/twitter/follow/berty?label=%40weshnet&style=flat&logo=twitter" /></a>
</p>

<h3 align="center">The Wesh network toolkit lets your application use the Wesh protocol to support privacy-based, off-grid, peer-to-peer communication.  
<br/><br/>For details, see the Wesh website at https://wesh.network.The website includes blog tutorials which introduce you to Wesh and walk you through some example applications and background of the Wesh protocol.</h3>

---

## Requirements

. [asdf](https://asdf-vm.com/#/core-manage-asdf-vm) (required for installing the correct version of Go and other tools. See the complete dependencies list in the [asdf configuration file](./.tool-versions))

## Getting Started

    ### Install the tools
    $ make asdf.install_tools

    ### Install the project dependencies
    $ yarn install

    ### Build the project for IOS
    $ make build.ios


## Development

TODO

### Testing

To test the project, we need to push the npm package to a local registry and then install it in the example app.
Let's start by pushing the package to the local registry:

    ### Start the local registry
    $ docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
    
    ### Creates a new user in the local registry
    $ npm adduser --registry http://localhost:4873

    ### In the root folder, push the package to the local registry
    $ yarn publish --registry http://localhost:4873

### Architecture

TODO

### Testing

TODO

## Contributing

[![Contribute to Berty](https://assets.berty.tech/files/contribute-contribute_v2--Contribute-berty-ultra-light.gif)](https://github.com/berty/community)

If you want to help out, please see [CONTRIBUTING.md](./CONTRIBUTING.md).

This repository falls under the Berty [Code of Conduct](https://github.com/berty/community/blob/master/CODE_OF_CONDUCT.md).

You can contact us on the [`#dev-💻`](https://crpt.fyi/berty-dev-discord) channel on [discord](https://crpt.fyi/berty-discord).

## License

Dual-licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) and [MIT](https://opensource.org/licenses/MIT) terms.

`SPDX-License-Identifier: (Apache-2.0 OR MIT)`

See the [COPYRIGHT](./COPYRIGHT) file for more details.
