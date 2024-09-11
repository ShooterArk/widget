const path = require('path');

module.exports = {
  entry: './src/index.ts', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'widget.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Add support for TypeScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript', // Add TypeScript preset
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Resolve both JS and TS files
  },
  mode: 'production', // Set production mode for optimization
};