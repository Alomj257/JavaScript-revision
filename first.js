// Methods in array

let arr = [98, 96, 67, 78, 48];


// Add items to array
console.log(arr);
arr.push(45, 49);
console.log(arr);

// Delete items from array
let deletedValue = arr.pop();
console.log(deletedValue);
console.log(arr);

// Conver array to sting
let str = arr.toString();
console.log(str);

// concat
let arr1 = [20, 30, 40];
let arr2 = ["Jahangire", "Aasia", "Alom"];
let result = arr1.concat(arr2);
console.log(result);
console.log(arr1.concat(arr2));

// unshift : add to first
let items = [1,2,3,5,5];
items.unshift(10);
console.log(items);

// shift : delete from the first
let names = ["Kolkata", "Delhi", "Mumbai"];
names.shift();
console.log(names);

// slice : returns peice of array;
let students = ["Aasia", "Jahangir", "Tahmid"];
let student = students.slice(0,2);
console.log(student);

// splice : change origianl array (add, remove, replace);

let a = [1,2,3,4,5,6,7];
a.splice(2,0, 101,102)
console.log(a)

// delete
a.splice(3,1)
console.log(a);