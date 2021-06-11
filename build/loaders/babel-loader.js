const {getOptions} = require('loader-utils');
const fs = require('fs');
const babel = require('@babel/core');

module.exports = function(source){
    const options = getOptions(this);
    const {code,map,ast} = babel.transformSync(source,options);
    return code;
}
