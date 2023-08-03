const arr = [112, 324, 547, 66, 8729, 2, 65, 9, 278, 46, 13, 199, 433]

function radixSort(arr) {
    const max = Math.max(...arr);
    let maxRadix = 1;
    while (max > Math.pow(10, maxRadix)) {
        maxRadix++;
    }

    for (let radix = 0; radix < maxRadix; radix++) {
        const counts = [];
        const help = [];
        for(let i = 0 ; i < 10; i++){
            counts[i] = 0;
        }

        const base = Math.pow(10, radix);
        for (let i = 0; i < arr.length; i++) {
            let countIndex = Math.floor((arr[i] / base) % 10);
            counts[countIndex]++;
        }

        for(let i = 1; i < counts.length ; i++){
            counts[i]+= counts[i-1];
        }

    }
    return arr;
}

module.exports = radixSort;
