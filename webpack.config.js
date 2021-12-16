const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /.(js|jsx)$/,
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
                exclude: /node_modules/

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
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new ExtractTextPlugin({filename: 'aysisininc.css', allChunks: true})
    ]
}