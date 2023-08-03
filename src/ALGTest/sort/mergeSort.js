/**
 * 归并排序
 */
module.exports = function mergeSort(arr){
    function sort(arr){
        if(arr.length < 2) return arr;
        const arr1 = [];
        const arr2 = [];
        const m = Math.floor(arr.length / 2);
        for(let i = 0 ; i < arr.length ; i++){
            if(i < m){
                arr1.push(arr[i])
            }else{
                arr2.push(arr[i])
            }
        }
        return merge(sort(arr1),sort(arr2));
    }

    return sort(arr);

    function merge(arr1,arr2){
        let i = 0,j = 0;
        let result = [];
        while(arr1.length !== 0 && arr2.length !== 0){
            if(arr1[0] <= arr2[0]){
                result.push(arr1.shift());
            }
            if(arr1[0] > arr2[0]){
                result.push(arr2.shift());
            }
        }
        if(arr1.length !== 0){
            result = result.concat(arr1);
        }
        if(arr2.length !== 0){
            result = result.concat(arr2);
        }
        return result;
    }
}
