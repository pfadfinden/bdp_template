var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
    entry: {
        buena: './Resources/Private/Stylesheets/sass/buena.scss',
    },
    output: {
        path: path.resolve(__dirname, 'Resources/Public'),
        filename: 'JavaScript/[name].js'
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }

                },
                {
                    loader: 'postcss-loader',
                },{
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "CSS/[name].min.css",
            chunkFilename: "CSS/[id].css"
        })
    ],
    stats: {
        colors: true
    },
    externals: {
        masonry: 'masonry'
    },
    devtool: 'source-map'
};