/*
 * @Author: frozen521
 * @Date:   2019-03-16 10:42:41
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 10:57:01
 */
//字符串重复最多的字母
var fs = require('fs');
var readline = require('readline');
function replThreeChar(str) {

    //判断是不是字符串,如果是数组对象就转换
    if (typeof str == "object") {
        var str = str.join("");
    } else {
        var str = str;
    }

    //如果长度为1,直接返回
    if (str.length == 1) {
        return str;
    }

    var charObj = {};
    //遍历重复值
    for (var i = 0; i < str.length; i++) {
        //不相等  
        if (!charObj[str.charAt(i)]) {
            charObj[str.charAt(i)] = 1;
        } else {
            charObj[str.charAt(i)] += 1;
        }

    }

    //判断大小
    var maxChar = '',
        maxVal = 1;
    for (var k in charObj) {
        if (charObj[k] >= maxVal) {
            maxChar = k;
            maxVal = charObj[k];
        }
    }
 var i=str.indexOf(maxChar);
  str=str.substring(0, i)+str.substring(i+1);


    var indexVal = [];
    indexVal.push(maxChar); //最多的字符
    indexVal.push(maxVal); //最多的次数

    return str;

} 

var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline();
    print(replThreeChar(lines))
}