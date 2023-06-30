const webpack = require('webpack')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        publicPath: '/',
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html", favicon: './src/img/favicon.svg'}),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env' : {
                API_URL : JSON.stringify(process.env.API_URL)
            }
        })
    ],
    stats: {
        children: true
    },
    module: {
        rules: [
            {
                test: /\.(svg|jpg|jpeg)$/,
                type: 'asset/resource'
            },
            {
                test: /.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            injectType: "singletonStyleTag",
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
}