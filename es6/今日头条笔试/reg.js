/*
* @Author: frozen521
* @Date:   2019-03-16 10:54:00
* @Last Modified by:   frozen521
* @Last Modified time: 2019-03-16 11:24:34
*/
// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var ans = 0;
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    for(var j = 0;j < lines.length; j++){
        ans += parseInt(lines[j]);
    }
}
print(ans);