function bubble (arr) {
    console.time('冒泡')

    var len=arr.length;
    for (let i = 0; i<len; i++) {
        for(let j=0; j<len-i-1; j++){
            if(arr[j+1]<arr[j]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                console.log(arr[j])
            }
        }
    }
    console.timeEnd('冒泡')
    return arr;
}

console.log(bubble([34,22,145,2,15,7,8]))