# Developer Guide

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
    $ npm publish --registry http://localhost:4873

### Publishing the package on NPM

To publish the package on NPM, you need to be a member of the [@berty](https://www.npmjs.com/org/berty) organization. Then, you can run the following command:

    $ make npm.publish
### Architecture

TODO
