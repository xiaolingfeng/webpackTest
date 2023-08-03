const arr = [112, 324, 547, 66, 8729, 2, 65, 9, 278, 46, 13, 199, 433]

function radixSort(arr) {
    const max = Math.max(...arr);
    let maxRadix = 1;
    while (max > Math.pow(10, maxRadix)) {
        maxRadix++;
    }

    const buckets = [];
    for(let i = 0 ; i < 10; i++){
        buckets[i] = [];
    }
    for (let radix = 0; radix < maxRadix; radix++) {
        const base = Math.pow(10, radix);
        for (let i = 0; i < arr.length; i++) {
            let bucketIndex = Math.floor((arr[i] / base) % 10);
            buckets[bucketIndex].push(arr[i]);
        }
        arr = [];
        for (let bi = 0; bi < buckets.length; bi++) {
            for (let bj = 0; bj < buckets[bi].length; bj++) {
                arr.push(buckets[bi][bj]);
            }
            buckets[bi] = [];
        }
    }
}

module.exports = radixSort;
