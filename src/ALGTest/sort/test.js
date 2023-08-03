const createArray = require('../createArray');
const selectSort = require('./selectSort');
const fastSort = require('./fastSort');
const mergeSort = require('./mergeSort');
const heapSort = require('./heapSort');
const radixSort = require('./radixSort');


function logTime(fn){
    const arr = createArray(50000);
    console.time(fn.name);
    const result = fn(arr);
    console.timeEnd(fn.name);
    if(arr.length <= 20){
        // console.log(fn.name + '\n' + result);
    }
    console.log('---------------------------');
}

function testArr(arr){
    arr.forEach(fn=>{
        logTime(fn);
    })
    console.time('arr.sort');
    const real = arr.sort((a,b)=>{return a - b})
    console.timeEnd('arr.sort');
}

// testArr([fastSort,heapSort,radixSort])
testArr([radixSort,heapSort])
