const axios = require("axios");
{
    console.log("________________________________________________");
    let arr = [1, 3, 4];
    let iter = arr[Symbol.iterator]();
    for (let i = 0; i < arr.length; i++) {
        console.log(iter.next().value);
    }
}
{
    console.log("________________________________________________");
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}
{
    console.log("________________________________________________");
    let obj = {
        a: 1,
        b: 2,
        c: 3
    };
    let obj2 = {
        ...obj,
        d: 4
    };
    console.log(obj2);
}
{
    console.log("________________________________________________");
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("settime");
            resolve("soleved");
        }, 2000);
    });
    promise.then(res => {
        console.log(res);
    });
}

{
    console.log("________________________________________________");
    async function getinfo() {
        let res1 = await axios.get(
            "https://www.easy-mock.com/mock/5c2e05e24da14e2caaac7d0d/testajax/index1"
        );
        let res2 = await axios.get(
            "https://www.easy-mock.com/mock/5c2e05e24da14e2caaac7d0d/testajax/index"
        );
        let res3 = await axios.get(
            "https://www.easy-mock.com/mock/5c2e05e24da14e2caaac7d0d/testajax/index"
        );
    }
}
