const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'dist'), // resolve -> join
      filename: '[name].main.js',
      // clean: true,
    },
    module: {
      rules: [
          {
              test: /\.js$/i,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
              }
          },
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'icons/[name][ext]'
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
      ],
  };
