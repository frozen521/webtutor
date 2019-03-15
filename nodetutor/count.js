var counter = function (arr) {
    return 'there are ' + arr.length + 'elements in this array';

};
var adder = function (a, b) {
    return 'sumis${a+b}';
};
var pi = 3.14;

module.exports = {
    counter,
    adder,
    pi,
};
