const path = require('path')

module.exports = () => {
  return {
    devtool: 'inline-source-map',
    entry: {
      'polifyll-intl-enumeration': ['./src/index.js']
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].min.js',
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    module: {
      rules: [{
        test: /src\/*.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader'
        }]
      }]
    }
  }
}
