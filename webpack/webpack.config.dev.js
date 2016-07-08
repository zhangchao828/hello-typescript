var webpack=require('webpack')
var baseConfig=require('./webpack.base')
var config=require('../config'),
    port=config.port||3000,
    entrys=config.entrys;
Object.keys(entrys).forEach(function (entryName) {
    var entryPath=entrys[entryName];
    if(entryName!=='vendor'){
        entrys[entryName]=[
            'webpack-hot-middleware/client?reload=true',
            entryPath
        ]
    }
})
baseConfig.entry=entrys
baseConfig.output.publicPath='http://localhost:'+port+'/dist/'
var plugins=baseConfig.plugins;
plugins.push(
    new webpack.HotModuleReplacementPlugin()
)
plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        __DEV__:true
    })
)
baseConfig.devtool='source-map'//cheap-module-eval-source-map
module.exports=baseConfig