const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/aysisinc.com'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000,
   watchContentBase: true,
   historyApiFallback: true
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
      test: /\.woff2(\?\S*)?$/,
        use: {
          loader: 'url-loader'
        }
     },
     {
       test: /\.css$/,
       use: [MiniCssExtractPlugin.loader, "css-loader"]
     },
     {
      test: /\.(png|jpe?g|svg|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        },
      ],
    }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css",
})]
}