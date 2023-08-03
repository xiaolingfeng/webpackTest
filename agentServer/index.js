const express = require('express');
const app = express();
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware')

app.all('*',function(req,res,next){
    console.log(req.path);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    next();
})

app.use('/',createProxyMiddleware({
    target:'https://dwx.cpic.com.cn',
    changeOrigin:true,
}))

// app.use('/aliExpress',express.static(path.join(__dirname,'../aliExpress')))

app.listen(5002,()=>{
    console.log('Server run on 5002');
})
