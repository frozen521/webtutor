class stacktest {
    constructor() {
        this.items = [];
    }
    push(elemnt) {
        this.items.push(elemnt);
    }
    pop() {
        return this.items.pop();
    }
    get peek() {
        return this.items[this.items.length - 1];
    }
    get isEmpty() {
        return !this.items.length;
    }
    get size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.toString());
    }
}

{
    console.log("________________________________________________");
    let s = new stacktest();
    console.log(s.isEmpty);
    s.push(2);
    s.push(3);
    s.push(5);
    console.log(s);
    s.pop();
    console.log(s);
    s.print();
}
