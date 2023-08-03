exports.swap =(arr,i,j)=>{
    /*arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];*/
    const temp = arr[j] ;
    arr[j] = arr[i];
    arr[i] = temp;
}


exports.logHeap = (arr)=>{
    const depth = Math.ceil(Math.log2(arr.length));
    const unitWidth = 8;
    let output = ''
    let d = 1;
    arr.forEach((e,i)=>{
        const w = Math.pow(2,(depth - d)) * unitWidth;
        const offset = ''.padStart(Math.floor((w - String(e).length) / 2));
        const str = `${offset}${e}${offset}`.padEnd(w);
        output += str;
        if(i === Math.pow(2,d) - 2){
            output += '\n';
            d++;
        }
    })
    console.log(`heap depth:${depth}-----------------`)
    console.log(output);
    console.log('heap end----------------')
}
