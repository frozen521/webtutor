/*
 * @Author: frozen521
 * @Date:   2019-03-16 15:36:39
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 15:38:59
 */
bubbleSortSoul2 = (arr = []) => {
    let length = arr.length - 1;
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        count++;
        // 这里的length第一轮==arr.length-1-0跟上一版一样
        for (let j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        // 每一次内层for循环比较完成-1 跟前面的-i一样 换汤不换药
        length--;
    }
    console.log(`bubbleSortSoul2排序完成用了${count}轮`);
    return arr;
}
console.log(bubbleSortSoul2([1, 4, 6, 4, 64, 4, 478,37,94,73,323,36,35,64]));