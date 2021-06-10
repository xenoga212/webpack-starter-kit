const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/app.js', './src/sass/main.scss'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'deploy')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    contentBase: './deploy',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack starter kit',
      template: './src/index.html',
      filename: 'index.html'
    }),

    new CleanWebpackPlugin()
  ]
};
