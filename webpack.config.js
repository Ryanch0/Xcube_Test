const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: ''}
      ],
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    static: [
      path.join(__dirname, 'dist'),
      path.join(__dirname, 'public'),
    ],
    compress: true,
    port: 9000,
    historyApiFallback: true,
    client: {
      overlay: false,
    }
  }
};