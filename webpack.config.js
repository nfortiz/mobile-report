const path = require('path')
const { config } = require('./src/server/config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const entry = ['./src/frontend/index.js']

if (config.dev) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload')
}

module.exports = {
  mode: config.dev ? 'development' : 'production',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    config.dev ? new webpack.HotModuleReplacementPlugin() : () => {},
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/frontend/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/frontend/styles/style.css',
        to: ''
      }
    ])
  ],
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}
