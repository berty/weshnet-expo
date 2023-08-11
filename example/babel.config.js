const path = require('path') /* eslint-disable-line @typescript-eslint/no-var-requires */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          alias: {
            // For development, we want to alias the library to the source
            '@weshnet/expo': path.join(__dirname, '..', 'src', 'index.ts'),
          },
        },
      ],
    ],
  }
}
