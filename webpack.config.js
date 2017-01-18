var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: "inline-sourcemap",
    entry: {
        "main":"./src/index.js"
    },
    // node: {
    //   fs: "empty"
    // },
    output: {
        path: __dirname + "/public",
        filename: "[name].bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.ejs$/,
                loader: 'file?name=/views/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file?name=/fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file?name=/images/[name].[ext]'
            }
        ]
    }
};
