var webpack = require("webpack");
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require("extract-text-webpack-plugin");
var helpers = require("./helpers");

module.exports = {
    entry: {
        'polyfills': "./src/polyfills.ts",
        "app": "./src/main.ts"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: helpers.root("src", "tsconfig.json")
                        }
                    },
                    "angular2-template-loader"
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: "file-loader?name=assets/[name].[hash].[ext]"
            },
            {
                test: /\.css$/,
                exclude: helpers.root("src", "app"),
                loader: extractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.css$/,
                include: helpers.root("src", "app"),
                loader: "raw-loader"
            }
        ],
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root("./src"),
            {} // map of routes
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "polyfills"]
        }),
        new htmlWebpackPlugin({
            template: "src/index.html"
        })
    ]
};
