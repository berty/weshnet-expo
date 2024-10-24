#!/bin/sh

#If the folder exists, copy API files
if [ -d "./build" ]; then

    cp ./src/api/protocoltypes.pb.js ./build/api/
    cp ./src/api/protocoltypes.pb.d.ts ./build/api/
    cp ./src/api/rpcmanager.pb.d.ts ./build/api/
    cp ./src/api/rpcmanager.pb.js ./build/api/

#Else prints an error
else
    echo "Error: build folder not found, please do \`yarn install\` first"
fi
