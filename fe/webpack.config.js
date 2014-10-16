var path    = require("path");
var webpack = require('webpack');


// http://webpack.github.io/docs/stylesheets.html
var ExtractTextPlugin = require("extract-text-webpack-plugin");


production_paths = {
    output_filename:      "[name]-bundle-[hash].js",
    output_chunkFilename: "app.[id]-[chunkhash].js",
    css_filename:         "[name]-[hash].css",
    common_filename:      'common-[hash].js',
}

development_paths = {
    output_filename:      "[name]-bundle.js",
    output_chunkFilename: "app.[id].js",
    css_filename:         "[name].css",
    common_filename:      'common.js',
}

file_paths = development_paths; // or production_paths


module.exports = {
    context: __dirname,
    entry: {
        clients:  "./ap/clients/entry.js",
        invoices: "./ap/invoices/entry.js",
    },
    output: {
        path:          path.join(__dirname, '..', "public", "webpack"),
        filename:      file_paths.output_filename,
        chunkFilename: file_paths.output_chunkFilename,
        publicPath:    "/webpack/"  // for img paths in css-urls
    },
    plugins: [
        new ExtractTextPlugin( file_paths.css_filename ),
        new webpack.optimize.CommonsChunkPlugin( file_paths.common_filename )
    ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
            },
            {
                test: /\.coffee$/,
                loader: 'coffee-loader'
            },
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },
            {
                test: /\.woff$/,
                loader: "url-loader?prefix=font/&limit=5000"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file-loader?name=[path][name]-[hash].[ext]&size=6"
            }
        ]
    },
    resolve: {
        alias: {
            ap:     path.join(__dirname, "ap"),
            shared: path.join(__dirname, "ap", "shared"),
            bower:  path.join(__dirname, "bower_components"),
            // vendorized files
            jquery: path.join('bower', 'jquery/dist/jquery'),
            //react:  path.join('bower', 'react/react'),
            react:  path.join('bower', 'react/react-with-addons'),
            d3:     path.join('bower', 'd3/d3'),

        },
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee', '.css', '.less']
    }
}
