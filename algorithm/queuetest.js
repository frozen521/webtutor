class queuetest {
    constructor(items) {
        this.items = items || [];
    }
    enqueue(elemnt) {
        this.items.push(elemnt);
    }
}
