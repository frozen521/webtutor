var bubblesort = require('licia/bubbleSort')
var camelCase = require('licia/camelCase')
console.log(bubblesort([5, 3, 3, 2, 7, 8, 84, 5, 89, 9, 8]));
console.log(camelCase('foo-bar')); // -> fooBar
console.log(camelCase('foo bar')); // -> fooBar
console.log(camelCase('foo_bar')); // -> fooBar
console.log(camelCase('foo.bar')); // -> fooBar