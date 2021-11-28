const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

const paths = require('./paths')

const PAGES_DIR = `${paths.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR)
const entryPoints = PAGES.map(page => {
  const pageName = page.split('.')[0]
  return ({
    [pageName]: `${PAGES_DIR}${page}/${page}.js`,
  })
})

module.exports = {
  target: 'web',
  // Where webpack looks to start building the bundle
  entry: Object.assign({}, ...entryPoints),
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    ...PAGES.map(page => new HtmlWebpackPlugin({
      chunks: [page],
      template: `${PAGES_DIR}${page}/${page}.pug`,
      filename: `./${page}.html`,
      favicon: `${paths.public}/favicon.ico`,
      inject: 'body'
    })),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.pug$/, use: [
          {
            loader: 'pug-loader',
            options: {
              root: paths.src
            }
          }
        ]
      },
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i, type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][hash][ext]'
        },
        exclude: /fonts/,
      },
      //
      // // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg)$/, type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        },
        include: /fonts/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~src': `${paths.src}`,
      '~scss': `${paths.src}/assets/scss`,
      '~pages': `${paths.src}/pug/pages`,
      '~components': `${paths.src}/components`,
    },
  },
}
