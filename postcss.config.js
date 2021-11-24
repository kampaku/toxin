module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
  },
}