// console.log(...[1,2,3,]);

function pushaay(array, items) {
    array.push(...items);
    console.log(array);
}
pushaay([1, 2], [3, 4, 5]); //[ 1, 2, 3, 4, 5 ]

function f(x, y, z) {
    //
}
let args = [1, 2, 3];
f(...args); //不需要apply方法

Math.max(...[23, 5, 12]);
let arrbefore = [1, 2, 3];
let arrtemp = [3, 4, 5];
arrbefore.push(...arrtemp);
console.log(..."hello");
{
    let mapa = new Map([[1, "one"], [2, "two"], [3, "three"]]);
    let arr = [...mapa.keys()]; //[1,2,3]
    console.log(`hello\n${arr}`);
}
const go = function*() {
    yield 1;
    yield 2;
    yield 3;
};
[...go()]; //[1,2,3]
{
    let arraylik = { "0": "a", "1": "b", "2": "c" };
    console.log(Array.from(arraylik));
}
{
    Array.from("hello"); //等同于[...'hello']
    let nameset = new Set(["a", "b", "1"]);
    console.log(Array.from(nameset));
}
{
    console.log("________________________________________________");
}
