// const timeFormatter = require('./timeFormatter');
import timeFormatter from './timeFormatter';

function log(str){
    if(str instanceof Date){
        str = timeFormatter(str);
    }
    console.log("IT IS MY LOG : " + str);
}

// module.exports = log

export default log;
