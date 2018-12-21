module.exports = {
  plugins: {
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        'nesting-rules': true,
        'color-mod-function': { unresolved: 'warn' }
      },
      stage: 0,
    },
    'postcss-flexbugs-fixes': {},
  }
}