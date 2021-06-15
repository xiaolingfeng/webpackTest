const fs = require('fs')
const path = require('path');
const chalk = require('chalk');
const defaultPath = path.resolve(__dirname, '../log');
const JSON5 = require('json5');
const {createHash} = require('crypto');


function createLogFile(filename,content) {
    if (!(typeof content === 'string')) {
        content = JSON5.stringify(content,null,2);
    }
    const timeStamp = new Date().getTime();
    const hash = createHash('md5').update(content).digest('hex');
    fs.stat(defaultPath,function(err,stats){
        const pathname = path.resolve(defaultPath, `${filename}_${timeStamp}.json5`);
        if(err){
            console.error(err);
            fs.mkdir(defaultPath,function(){
                writeFile(pathname,content)
            })
        }else{
            writeFile(pathname,content)
        }
    })


}

function writeFile(pathname,content){
    fs.writeFile(pathname,content,(err)=>{
        if(err) throw err;
        console.log(chalk.green(`Log is saved in ${pathname}`))
    })
}

module.exports = createLogFile;
