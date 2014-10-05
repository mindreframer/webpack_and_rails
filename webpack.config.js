var path           = require("path");
var SaveAssetsJson = require('assets-webpack-plugin');


// http://webpack.github.io/docs/stylesheets.html
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// common files
var webpack = require('webpack');
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');


module.exports = {
    context: __dirname,
    entry: {
        clients:  "./fe/ap/clients/entry.js",
        invoices: "./fe/ap/invoices/entry.js",
    },
    output: {
        //path: path.join(__dirname, 'app', 'assets', 'javascripts'),
        //filename: "[name]-bundle.js",
        path: path.join(__dirname, "public", "webpack", "js"),
        //filename: "[name]-bundle-[hash].js",
        filename: "[name]-bundle.js",
        chunkFilename: "[id].js",
        publicPath: "/webpack/js/"
    },
    plugins: [


        new SaveAssetsJson({
            path: path.join(__dirname, 'app', 'views'),
            filename: 'webpack-assets.json',
        }),
        new ExtractTextPlugin("[name].css"), // for css
        commonsPlugin
    ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                //loader: "style-loader!css-loader!less-loader",
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
            }, // use ! to chain loaders
            {
                test: /\.css$/,
                //loader: 'style-loader!css-loader'
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
            },
            { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.coffee$/, loader: 'coffee-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' } // loaders can take parameters as a querystring
        ]
    },
    resolve: {
        alias: {
            ap:     path.join(__dirname, "fe", "ap"),
            shared: path.join(__dirname, "fe", "ap", "shared"),
            bower:  path.join(__dirname, "fe", "bower_components"),

        },
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee', '.css', '.less']
    }
}
