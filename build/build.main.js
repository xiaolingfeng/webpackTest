/*import webpack from 'webpack';
import config from './webpack.config.js';*/

const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);

compiler.run((err,stats)=>{
    console.log(stats.toString({colors:true}));
    if(err){
        console.error(err);
    }else{
        console.info('Completed!');
        // compiler.close()
    }
});
