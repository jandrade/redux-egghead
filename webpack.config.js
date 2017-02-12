var path = require('path');

module.exports = {
  entry: './src/todoApp.js',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'docs/js/'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      }
    ],
  }
};