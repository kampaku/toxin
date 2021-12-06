const webpack = require('webpack')
const { merge } = require('webpack-merge')

const common = require('./webpack.common')
const paths = require('./paths')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    }
  },

  // Control how source maps are generated
  devtool: 'eval-cheap-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    static: [`${paths.src}`],
    // open: ['landing-page.html'],
    open: false,
    compress: true,
    hot: true,
    port: 8081,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [`${paths.src}/assets/scss/utils/vars.scss`,
                `${paths.src}/assets/scss/utils/font-template.scss`]
            }
          },
        ],
      },
    ],
  },
})
