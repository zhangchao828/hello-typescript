var webpack=require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rootPath=path.join(__dirname,'..');
var nodeModulesPath = path.resolve(rootPath,'node_modules');
module.exports = {
    output: {
        path: path.join(rootPath, '/dist'),
        chunkFilename: '[name].chunk.js',
        filename: '[name].min.js'
    },
    module: {
        noParse: [
            path.resolve(nodeModulesPath, 'react/dist/react.js'),
            path.resolve(nodeModulesPath, 'react-dom/dist/react-dom.js'),
            path.resolve(nodeModulesPath, 'redux/dist/redux.js'),
            path.resolve(nodeModulesPath, 'react-router/umd/ReactRouter.js')
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        },{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'ts'
        }, {
            test: /\.scss/,
            include:[path.join(rootPath,'app')],
            loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
        },{
            test: /\.less$/,
            include:[path.join(rootPath,'app')],
            loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss!less"
        },{
            test: /\.css$/,
            include:[path.join(rootPath,'assets/css/')],
            loader:  ExtractTextPlugin.extract("style", "css?sourceMap!postcss")
        }, {
            test: /\.css$/,
            include:[path.join(rootPath,'app')],
            loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss"
        },{
            test: /\.css$/,
            include: /node_modules/,
            loader: 'style!css'
        },{
            test: /\.(png|jpe?g|gif)$/,
            loader: 'url?limit=1024'
        },{
            test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url?limit=10240'
        }]
    },
    postcss: [
        require('precss')(),
        require('cssnano')(),
        require('autoprefixer')({browsers: ['last 2 versions']})
    ],
    resolve: {
        extensions: ['', '.js', '.scss', '.css', '.jsx','.ts']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename:'vendor.bundle.js',
            minChunks: Infinity
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("[name].min.css",{allChunks: true}),
        new webpack.optimize.DedupePlugin()
    ]
};