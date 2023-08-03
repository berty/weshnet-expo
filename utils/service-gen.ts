import * as fs from 'fs'
import * as pbjs from 'protobufjs'

// Check if two arguments are provided
if (process.argv.length < 4) {
  console.error('Please provide two file paths as arguments.')
  process.exit(1)
}

// Extract arguments
const [protofile] = process.argv.slice(1)

// Check if the first file exists
if (!fs.existsSync(protofile)) {
  console.error(`File at path ${protofile} does not exist.`)
  process.exit(1)
}

// pbjs.load(protofile, '', callback)

// File exists, do something
console.log(`File at path ${protofile} exists.`)
