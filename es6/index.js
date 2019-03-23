class Car {
    constructor(brand, lineup) {
        this.brand = brand
    }

     show() {
        console.log(`this is ${this.brand}`)
    }
}
class Lexus  extends Car{
    constructor(brand,lineup){
        super(brand)
        this.lineup=lineup;
    }
    getPrice(){
        console.log('first step')
    }
}

let mycar=new Lexus('lexu','rx');
mycar.show();
mycar.getPrice()