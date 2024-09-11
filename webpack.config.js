const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Your React entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  mode: 'production',
};