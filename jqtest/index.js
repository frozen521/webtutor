<<<<<<< HEAD
var bubblesort = require('licia/bubbleSort')
var camelCase = require('licia/camelCase')
console.log(bubblesort([5, 3, 3, 2, 7, 8, 84, 5, 89, 9, 8]));
console.log(camelCase('foo-bar')); // -> fooBar
console.log(camelCase('foo bar')); // -> fooBar
console.log(camelCase('foo_bar')); // -> fooBar
console.log(camelCase('foo.bar')); // -> fooBar
=======
var url = 'data/d.txt'
import jquery from 'jquery';

$.ajax({
        url,
        dataType: "json",
        success(arr) {
            console.log(arr)
        }, error(err) {
            console.log(err)
        }
    }
)
>>>>>>> 90c11749a081961be86fb5b0f8db2113c6f3f642
