const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const {
    window
} = new JSDOM(`<!DOCTYPE html>`);
let xhr = new window.XMLHttpRequest();
xhr.open('get ', 'https://www.easy-mock.com/mock/5c2e05e24da14e2caaac7d0d/testajax/index1');
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(xhr.status + xhr.statusText);

    } else {
        console.log(xhr.responseText);
        console.log("finish");
    }
}