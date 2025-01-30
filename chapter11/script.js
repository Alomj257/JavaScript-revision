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
    start(){
        console.log("Start")
    }

    stop() {
        console.log("Stop")
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner")
let lexus = new ToyotaCar();
lexus.setBrand("Lexus")