module.exports={
    entrys:{
        app:'./app/',
        //公共模块,不要将react-router和redux放在这，不然不能热重载
        vendor: [
            'react',
            'react-dom'
        ]
    },
    port:3000,
    //http代理
    proxyTable:{
        
    }
}