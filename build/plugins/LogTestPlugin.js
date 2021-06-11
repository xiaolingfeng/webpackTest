const path = require('path');
const chalk = require('chalk');
const {createLogFile} = require('../utils')


let moduleFlag = true;

module.exports = class LogTestPlugin {
    apply(compiler){
        compiler.hooks.compilation.tap('LogTestPlugin',(complication)=>{
            console.log(chalk.blue('START'));
            createLogFile('complication_options',complication.options.optimization)
            complication.hooks.buildModule.tap('LogTestPlugin',module=>{
                if(!moduleFlag){
                    console.log(chalk.red("MODULE START-----------------"))
                    console.log(chalk.red("MODULE END-----------------"))
                    moduleFlag = true;
                }
            })
        })
    }
}
