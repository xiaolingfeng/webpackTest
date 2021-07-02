/*const log = require('./myModule');
const modTxt = require('./demo.tmp');*/
import modTxt from '../demo.tmp';
import '../duplicationModuleTest'
import DumplicationModules from "../duplicationModuleTest";

console.log(DumplicationModules);


import('../duplicationModuleTest').then(res=>{
    console.log(res);
})
