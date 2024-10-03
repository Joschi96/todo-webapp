const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // ensures the dist folder is cleared before each build
  },
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
    static: './dist',
    open: true, // automatically opens the browser
    watchFiles: ["./src/index.html", "./src/index.js", "./src/styles/styles.css"], // watches these files for changes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // uses a template file for HTML
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
