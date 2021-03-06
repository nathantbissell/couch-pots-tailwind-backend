const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      util: require.resolve('util/'),
      fs: false,
      os: false,
      tls: false,
      dns: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      aws4: false,
      stream: false,
      crypto: require.resolve('crypto-browserify'),
    },
  },
  externals: ['dns', 'mongodb-client-encryption'],
};
