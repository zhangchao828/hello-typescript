var webpack=require('webpack')
var baseConfig=require('./webpack.base')
var config=require('../config'),
    entrys=config.entrys;
Object.keys(entrys).forEach(function (entryName) {
    var entryPath=entrys[entryName];
    if(entryName!=='vendor'){
        entrys[entryName]=entryPath
    }
})
baseConfig.entry=entrys
baseConfig.output.publicPath='/dist/'
var plugins=baseConfig.plugins;
plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        __DEV__:false
    })
)
plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
)
module.exports=baseConfig