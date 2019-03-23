let arr = ['a', 'b', 'c']
let map = new Map(arr);

// 遍历 key 值
for (let key of map.keys()) {
    console.log(key);
}

// 遍历 value 值
for (let value of map.values()) {
    console.log(value);
}

// 遍历 key 和 value 值(一)
for (let item of map.entries()) {
    console.log(item[0], item[1]);
}

// 遍历 key 和 value 值(二)
for (let [key, value] of data) {
    console.log(key)
}