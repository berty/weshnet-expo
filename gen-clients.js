import Handlebars from 'handlebars'
import pbjs from 'protobufjs'

// Load Protocol Buffer from specified .proto file
const pb = pbjs.loadSync('api/protocoltypes.proto')

// Function to decapitalize the first letter of a string
const uncap = (str) => str.charAt(0).toLowerCase() + str.slice(1)

const getInterface = (typ) => {
  const parts = typ.split('.')
  const ilast = `I${parts.pop()}`
  parts.push(ilast)
  return parts.join('.')
}

// Define an array of services
const services = ['weshnet.protocol.v1.ProtocolService']

// Prepare Handlebars templates
const serviceClientTemplate = Handlebars.compile(`
import api from './api/index.d'
import { Unary, ResponseStream, RequestStream } from './types'

export type ServiceClientType<S> = {{#each services}} {{this}} {{/each}}never;
`)

const ClientTemplate = Handlebars.compile(`
export interface {{name}}Client {
  {{#each methods}}
    {{this.name}}: {{this.type}}<api.{{this.svcName}}.{{this.request}}, api.{{this.svcName}}.{{this.reply}}>,
  {{/each}}
}
`)

// Gather data for ServiceClientType
let serviceData = {
  services: services.map((svcType) => {
    const svc = pb.lookup(svcType)
    return `S extends typeof api.${svc.parent.parent.name}.${svc.name} ? ${svc.name}Client :`
  }),
}

// Generate and output ServiceClientType
console.log(serviceClientTemplate(serviceData))

// Gather data for each Client and output
for (const svcType of services) {
  const svc = pb.lookup(svcType)
  const methodsData = Object.entries(svc.methods).map(([key, method]) => {
    let rpcType = ''
    if (!method.requestStream && !method.responseStream) {
      // Unary
      rpcType = 'Unary'
    } else if (method.requestStream && !method.responseStream) {
      // Request Stream
      rpcType = 'RequestStream'
    } else if (!method.requestStream && method.responseStream) {
      // Response Stream
      rpcType = 'ResponseStream'
    } else {
      // Dubplex
      rpcType = 'never'
    }

    const name = uncap(key)
    return {
      name: name,
      request: getInterface(method.requestType),
      reply: method.responseType,
      type: rpcType,
      svcName: `${svc.parent.parent.name}`,
    }
  })

  let ClientData = {
    name: svc.name,
    methods: methodsData,
  }

  console.log(ClientTemplate(ClientData))
}
