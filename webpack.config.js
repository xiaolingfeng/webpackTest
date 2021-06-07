const path = require('path');

module.exports = {
    mode:'production',
    entry:path.resolve(__dirname,'./src/main.js'),
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'name.bundle.js'
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
    }
}
