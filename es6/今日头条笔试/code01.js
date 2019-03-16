function removeitem (arr,item) {
    var newstr=str.replace(new RegExp(item,'g'),'')
    console.log(arr)
    return [...newstr]

}
console.log(removeitem([1, 2, 3, 4, 2], 2))