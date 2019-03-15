function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        const set=new Set(array);
        
        return Array.from(set);
    } else {
        return 'array is not an Array!';
    }
}
var m=insertionSort([3,4,5,6,7,663,42,33,3,894,2,74,8,34,8,3])
console.log(m)