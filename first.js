// String in js
// 1. Create string

let str = "Jahangir Alom";
console.log(str);
console.log(str.length); // String size
console.log(str[2]);

let str2 = 'Aasia Bano';
console.log(str2); 
console.log(str2.length); // String size

// Template literals
// A way to have embeded expressions in strings

let age = 27;
let str3 = `Hello i am jahangir and my age is ${age}`;
console.log(str3);
console.log(typeof str3)

let obj = {
    item : 'Pen',
    price : 10
}

console.log(`The cost of ${obj.item} is rs ${obj.price}`)