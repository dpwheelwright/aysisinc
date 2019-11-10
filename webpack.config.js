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
                test: /.(css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }

                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new ExtractTextPlugin({filename: 'aysisininc.css', allChunks: true})
    ]
}