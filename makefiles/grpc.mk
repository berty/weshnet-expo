src/grpc-bridge/welsh-clients.gen.ts: src/grpc-bridge/gen-clients.js src/api/protocoltypes.pb.js
	$(call check-program, npx)
	npx babel-node src/grpc-bridge/gen-clients.js > $@
	npx eslint --no-ignore --fix $@

# /Users/iuri/dev/berty/expo/weshnet-expo/packages/grpc-bridge/gen-clients.js