module.exports = function(length){
    const arr = [];
    for(let i = 0 ; i < length ; i++){
        const num = Math.floor(Math.random() * 100000)
        arr.push(num);
    }
    return arr;
}
