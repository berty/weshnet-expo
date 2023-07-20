import pbjs from 'protobufjs'

const pb = pbjs.loadSync('api/protocoltypes.proto')

const uncap = str => str.slice(0, 1).toLowerCase() + str.slice(1)

console.log("import * as api from './api'")
console.log("import { UnaryType, ResponseStreamType } from './types'")

const services = [
	'weshnet.protocol.v1.ProtocolService',
]

console.log('\nexport type ServiceClientType<S> =')
for (const svcType of services) {
	const svc = pb.lookup(svcType)
	console.log(`S extends api.${svc.parent.parent.name}.${svc.name} ? Welsh${svc.name}Client :`)
}
console.log('never')

for (const svcType of services) {
	const svc = pb.lookup(svcType)
	console.log(`\nexport interface Welsh${svc.name}Client {`)
	Object.entries(svc.methods).forEach(([key, method]) => {
		// console.log(uncap(key) + ': ')
		if (!method.requestStream && !method.responseStream) {
			// UNARY
			console.log(`UnaryType<api.${svc.parent.parent.name}.${svc.name}["${uncap(key)}"]>`)
			return
		}
		if (method.requestStream && !method.responseStream) {
			// REQUEST STREAM
			console.log(`RequestStreamType<api.${svc.parent.parent.name}.${svc.name}["${uncap(key)}"]>`)
			return
		}
		if (!method.requestStream && method.responseStream) {
			// RESPONSE STREAM
			console.log(
				`ResponseStreamType<api.${svc.parent.parent.name}.${svc.name}["${uncap(key)}"]>`,
			)
			return
		}
		// BIDI
		console.log('never')
	})
	console.log('}')
}
