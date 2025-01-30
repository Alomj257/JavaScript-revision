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

// class Person {
//     constructor(species){
//         this.species = species;
//     }
//     eat(){
//         console.log("Eat")
//     }
//     sleep(){
//         console.log("Sleep")
//     }
//     work(){
//         console.log("Do nothing")
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("Solve problem and build something")
//     }
// }

// let p1 = new Person("Human");
// console.log(p1)

// let jahangir = new Engineer();
// console.log(jahangir.work())
// console.log(jahangir.eat())
// console.log(jahangir.sleep())


// Super Keywords

// class Person {
//     constructor(species) {
//         this.species = species;
//     }
//     eat() {
//         console.log("Eat")
//     }
//     sleep() {
//         console.log("Sleep")
//     }
//     work() {
//         console.log("Do nothing")
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         super();
//         this.branch = branch;
//     }
//     work() {
//         console.log("Solve problem and build something")
//     }
// }

// let e1 = new Engineer ("ECE");
// console.log(e1)




// Practice 1

let data = "Secret information"
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(data);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email)
    }
    editData(){
        data = "Some new value"
    }
}

let user1 = new User("Jahangir", "alomj257@gmail.com")
console.log(user1)
console.log(user1.viewData())

let admin1 = new Admin("Admin", "admin@gmail.com");
console.log(admin1);
console.log(admin1.editData())
console.log(admin1.viewData())