/*const log = require('./myModule');
const modTxt = require('./demo.tmp');*/
import log from './log';
import modTxt from './demo.tmp';

log('HELLO');
log(new Date());
log(modTxt);

const set = new Set(["Martin","Mike","Maria"]);
log(set.toString());
