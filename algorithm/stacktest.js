/*
* @Author: frozen521
* @Date:   2019-03-16 15:47:27
* @Last Modified by:   frozen521
* @Last Modified time: 2019-03-16 16:28:29
*/
function Stack() {

    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };

    this.toString = function(){
        return items.toString();
    };
}

var stack=new Stack();
console.log(stack.isEmpty());
stack.push(1)
stack.push(3)
console.log(stack.peek())
console.log(stack.size())
stack.clear();

console.log(stack.size())