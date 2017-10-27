{
  const path = require('path')

  module.exports = {
    entry: './src/index.js',

    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.styl$/,
          use: ['style-loader', 'css-loader', 'stylus-loader']
        },
        {
          test: /\.(png|jpg)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img/'
              }
            }
          ]
        }
      ]
    }
  }
}
