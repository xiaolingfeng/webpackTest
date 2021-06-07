/*import {getOptions} from 'loader-utils';
import validateOptions from 'schema-utils';*/

const {getOptions} = require('loader-utils');
const validateOptions = require('schema-utils');
const chalk = require('chalk');

const schema = {
    type:'object',
    properties:{
        option:{}
    }
}

module.exports = function myConsole(source) {
    console.log(chalk.blue(source),chalk.yellow(typeof source));
    const options = getOptions(this);
    Object.keys(options).forEach(key=>{
        const value = options[key];
        const reg = new RegExp(`\{\{${key}\}\}`,'g');
        source = source.replace(reg,value);
    })

    return `module.exports = ${JSON.stringify(source)}`
}
