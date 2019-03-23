/*
 * @Author: frozen521
 * @Date:   2019-03-16 11:23:05
 * @Last Modified by:   frozen521
 * @Last Modified time: 2019-03-16 11:26:40
 */
var ma = [1, 2, 3, 4]

function sum(arr) {
    let sum = 0;
    for (let m of [...arr]) {
        // noinspection JSValidateTypes
        sum += m;
    }
    return sum;
}
console.log(sum(ma))