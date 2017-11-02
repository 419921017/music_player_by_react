const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const jQuery = require('jquery')
module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            'src': path.resolve(__dirname, './src/'),
            'static': path.resolve(__dirname, './static/'),
            'components': path.resolve(__dirname, './src/components/'),
        }
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["react-hot-loader/webpack","babel-loader"],
                exclude: /node_modules/
            }, 
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }, 
            {
                test: /\.less$/,
                use: ["style-loader","css-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3)(\?v=\d+\.\d+\.\d+)?$/,
                loader : 'file-loader'
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
        ]
    }
};