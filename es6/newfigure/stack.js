function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.pop = pop;
    this.push = push;
    this.peek = peek;
    this.length = length;
    this.clear = clear;

    function push(element) {
        this.dataStore[this.top++] = element;
    }
    function pop() {
        return this.dataStore[--this.top];
    }
    function peek() {
        if (this.top > 0) {
            return this.dataStore[this.top - 1];
        } else {
            return "empty";
        }
    }
    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.top = 0;
    }
    function length() {
        return this.top;
    }
}
var stack = new Stack();
console.log(stack.peek());
stack.push("apple");
stack.push("banana");
stack.push("pear");
console.log(stack.length());
console.log(stack.peek());
console.log(stack);
stack.clear();
console.log(stack);

{
    console.log("________________________________________________");
    //进制转换（2-9）

    function mulBase(num, base) {
        var s = new Stack();
        do {
            s.push(num % base);
            num = Math.floor((num /= base));
        } while (num > 0);

        var converted = "";
        while (s.length() > 0) {
            converted += s.pop();
        }
        return converted;
    }

    console.log(mulBase(125, 2)); // 1111101
    console.log(mulBase(125, 8)); // 175
}
{
    console.log("________________________________________________");
    //回文判断

    function isPalindrome1(word) {
        var s = new Stack();
        for (var i = 0; i < word.length; i++) {
            s.push(word[i]);
        }
        var rword = "";
        while (s.length() > 0) {
            rword += s.pop();
        }

        if (word === rword) {
            return true;
        } else {
            return false;
        }
    }

    console.log(isPalindrome1("level")); // true
    console.log(isPalindrome1("1001")); // true
    console.log(isPalindrome1("word")); // false
}
{
    console.log("________________________________________________");
    function isPalindrome2(word) {
        return (
            String(word)
                .split("")
                .reverse()
                .join("") === word
        );
    }
    console.log(isPalindrome2("hello"));
}
