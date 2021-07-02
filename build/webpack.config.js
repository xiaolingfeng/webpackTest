const path = require('path');
const ClearPlugin =  require("./plugins/clearPlugin.js");
const LogTestPlugin = require('./plugins/LogTestPlugin');
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
        filename:'[name].[contenthash:6].js',
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
    devtool: 'source-map',
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
