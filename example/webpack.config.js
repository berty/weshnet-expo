const createConfigAsync = require('@expo/webpack-config') /* eslint-disable-line @typescript-eslint/no-var-requires */
const path = require('path') /* eslint-disable-line @typescript-eslint/no-var-requires */

module.exports = async (env, argv) => {
  const config = await createConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@berty/weshnet-expo'],
      },
    },
    argv
  )
  config.resolve.modules = [
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, '../node_modules'),
  ]

  return config
}
