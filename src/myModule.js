const timeFormatter = require('./timeFormatter');

function log(str){
    if(str instanceof Date){
        str = timeFormatter(str);
    }
    console.log("IT IS MY LOG : " + str);
}

module.exports = log
