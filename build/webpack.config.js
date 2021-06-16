const path = require('path');
const ClearPlugin =  require("./plugins/clearPlugin.js");
const LogTestPlugin = require('./plugins/LogTestPlugin');
const currentDate = new Date().getTime();
const webpack = require('webpack');

module.exports = {
    // mode:'development',
    // mode:'production',
    mode:'none',
    entry:{
        main:path.resolve(__dirname,'../src/main/index.js'),
        utils:path.resolve(__dirname,'../src/utils/index.js'),
        main2:path.resolve(__dirname,'../src/main2/index.js')
    },
    output:{
        path:path.resolve('dist'),
        filename:'[name].[hash:6].[id].bundle.'+ currentDate +'.js',
    },
    module: {
        rules: [
            {
                test:/\.tmp$/,
                loader: path.resolve(__dirname,'./loaders/myConsole-loader.js'),
                options:{
                    name:'Martin',
                    age:'18'
                }
            },
            {
                test:/\.js$/,
                loader:path.resolve(__dirname,'./loaders/babel-loader.js'),
                options:{
                    presets:['@babel/env'],
                    // ast:true,
                    sourceMap:true
                }
            }
        ]
    },
    resolve: {
        alias:{
            '@':path.resolve(__dirname,'../src')
        }
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: "all",

        }
    },
    plugins: [
        new ClearPlugin(),
        new LogTestPlugin(),
    ]
}
