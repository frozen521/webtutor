{
    function serach(arr, element) {
        for (let i = 0; i < arr.length; i++) {
            if (element === arr[i]) {
                return i;
            }
        }
    }
    console.log("________________________________________________");
    function remov(arr, element) {
        const index = serach(arr, element);
        arr.splice(index, 1);
        return arr;
    }
    console.log(remov([1, 2, 3], 3));
}
