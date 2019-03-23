function bub(arr) {
    let len = arr.length;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }

    }
    return arr;
}
console.log(bub([1, 2, 664, 22, 11, 452, 22, 673, 34]))