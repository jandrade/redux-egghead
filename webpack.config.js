import path from 'path';

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'webpack.bundle.js',
    publicPath: '/docs/'
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