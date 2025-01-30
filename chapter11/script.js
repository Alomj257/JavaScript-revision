// Prototype

// const employee = {
//     calcTax(){
//         console.log("Tax rate is 10%")
//     }
// };

// const karanArjun = {
//     salary: 50000,
//     calTax() {
//         console.log("Tax rate is 20%")
//     }
// };

// karanArjun.__proto__ = employee;


// Classes in JavaScript

class ToyotaCar{
    constructor(brand, milage) {
        console.log("Creating new object")
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("Start")
    }

    stop() {
        console.log("Stop")
    }
}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("Lexus", 20);
console.log(lexus)