const { CheckerPlugin } = require('awesome-typescript-loader');
const { join } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    provider: join(__dirname, 'src/provider.ts'),
    content: join(__dirname, 'src/content.ts'),
    background: join(__dirname, 'src/background.ts')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: join(__dirname, '../dist/extension'),
    filename: '[name].js'
  },
  plugins: [new CheckerPlugin()],
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      // "zlib": require.resolve('browserify-zlib'),
      "zlib": false,
      "http": false,
      "https": false,
      // "buffer": require.resolve('buffer'),
      "stream": require.resolve('stream-browserify'),
      "crypto": require.resolve('crypto-browserify'),
      // "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    }
  }
};
