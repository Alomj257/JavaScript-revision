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

// class ToyotaCar{
//     constructor(brand, milage) {
//         console.log("Creating new object")
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("Start")
//     }

//     stop() {
//         console.log("Stop")
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("Lexus", 20);
// console.log(lexus)


// Inheritance

// class parent {
//     hello() {
//         console.log("Hello");
//     }
// }

// class Chlid extends parent {

// }

// let obj = new Chlid();
// console.log(obj.hello())

class Person {
    constructor(species){
        this.species = species;
    }
    eat(){
        console.log("Eat")
    }
    sleep(){
        console.log("Sleep")
    }
    work(){
        console.log("Do nothing")
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve problem and build something")
    }
}

let p1 = new Person("Human");
console.log(p1)

let jahangir = new Engineer();
console.log(jahangir.work())
console.log(jahangir.eat())
console.log(jahangir.sleep())