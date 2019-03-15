
//冒泡排序
function bubbleSort(arr){
   
    let len=arr.length;
    for(let i=1;i<len;i++){
        for(j=0;j<=len-i-1;j++){
            let temp = 0;
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }return arr;
}
console.log(bubbleSort([1, 9, 4, 50, 49, 6, 3, 2]))