const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'axios': 'axios',
  },
  optimization: {
    // vendor bundle
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new Dotenv({
      path: '.env.production'
    }),
    new HtmlWebpackPlugin({
      template: 'template.prod.html',
      favicon: './src/assets/images/favicon.png'
    }),
    new CleanWebpackPlugin(),
  ]
})