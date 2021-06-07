import path from 'path';
import ClearPlugin from "./plugins/clearPlugin.js";
const currentDate = new Date().getTime();

export default {
    mode:'production',
    entry:{
        main:path.resolve(__dirname,'../src/main.js'),
        utils:path.resolve(__dirname,'../src/utils/index.js')
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].[fullhash:6].[id].[contenthash].bundle.'+ currentDate +'.js',
    },
    module: {
        rules: [
            {
                test:/\.tmp$/,
                loader: path.resolve(__dirname,'./loaders/myConsole.js'),
                options:{
                    name:'Martin',
                    age:'18'
                }
            }
        ]
    },
    plugins: [
        new ClearPlugin()
    ]
}
