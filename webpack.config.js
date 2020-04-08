/* eslint-disable import/no-unresolved */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
/* eslint-enable import/no-unresolved */

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Weather App',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/images/favicon.png'),
      mode: 'webapp',
      devMode: 'webapp',
      inject: true,
      favicons: {
        appName: 'weather-app',
        appDescription: 'A weather app',
        developerName: 'Santiago Rodríguez',
        developerURL: null,
        background: '#ddd',
        theme_color: '#333',
          yandex: false,
        },
      },
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          skipEmptyLines: true,
        },
      },
      {
        test: /\.txt$/,
        use: ['raw-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  /* eslint-disable global-require, import/no-unresolved */
                  require('autoprefixer'),
                  /* eslint-enable global-require, import/no-unresolved */
                ];
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
