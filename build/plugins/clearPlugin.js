const chalk = require('chalk');
const path = require('path');
const fs = require('fs/promises');
/*
import chalk from "chalk";
import path from 'path';
import fs from 'fs/promises';
*/

class ClearPlugin {
    constructor() {
        console.log("Clear");
    }
    apply(compiler){
        compiler.hooks.beforeRun.tap('ClearPlugin',async compiler=>{
            const distPath = path.resolve(compiler.options.output.path);
            const direntList = await fs.readdir(distPath,{withFileTypes:true});
            direntList.forEach(dirent=>{
                const fullPath = path.resolve(distPath,dirent.name);
                if(dirent.isDirectory()){
                    fs.rmdir(fullPath,()=>{})
                }else{
                    fs.unlink(fullPath)
                }
            })
            // callback();
        })
    }
}


module.exports = ClearPlugin;
