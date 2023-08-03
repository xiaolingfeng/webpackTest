function fastSort(arr) {
    function sort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        const a = arr[Math.floor(Math.random() * arr.length)];
        const l = [];
        const m = [];
        const r = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < a) {
                l.push(arr[i])
            }
            if (arr[i] === a) {
                m.push(arr[i]);
            }
            if (arr[i] > a) {
                r.push(arr[i]);
            }
        }
        const sl = sort(l);
        const sr = sort(r);
        return [...sl, ...m, ...sr];
    }

    return sort(arr);
}

module.exports = fastSort;
