const {swap, logHeap} = require('./utils');

function heapSort(arr) {
    buildHeap(arr);
    const result = [];
    let times = 10;
    while(true){
        times--;
        result.push(arr[0]);
        if(arr.length === 1){
            return result;
        }
        swap(arr,0,arr.length - 1);
        arr.pop();
        heapFix(arr);
    }
}

function heapify(arr, index = arr.length - 1) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (arr[parentIndex] < arr[index]) {
        swap(arr, parentIndex, index);
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
    }
}

function heapFix(arr,index = 0){
    let l = index * 2;
    let r = index * 2 + 1;
    let maxChildIndex = arr[l] >= arr[r] ? l : r;
    if(arr[maxChildIndex] > arr[index]){
        swap(arr,index,maxChildIndex);
        heapFix(arr,maxChildIndex);
    }
}

function buildHeap(arr) {
    for (let i = 0; i < arr.length; i++) {
        heapify(arr, i);
    }
}

module.exports = heapSort;


