const path = require('path');
const ClearPlugin =  require("./plugins/clearPlugin.js");
const LogTestPlugin = require('./plugins/LogTestPlugin');
const currentDate = new Date().getTime();

module.exports = {
    // mode:'development',
    mode:'production',
    entry:{
        main:path.resolve(__dirname,'../src/main.js'),
        utils:path.resolve(__dirname,'../src/utils/index.js')
    },
    output:{
        path:path.resolve('dist'),
        filename:'[name].[fullhash:6].[id].[contenthash].bundle.'+ currentDate +'.js',
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
    /*optimization: {
        minimize: false
    },*/
    plugins: [
        new ClearPlugin(),
        new LogTestPlugin(),
    ]
}
