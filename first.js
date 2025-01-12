// Arrays in js
// Collection of items in contigious memory allocation.

let heros = ["Jahangir", "ironman", "hulk", "thor"];
console.log(heros);
console.log(heros.length);

let marks = [91, 92, 96, 78, 85];
console.log(marks);
console.log(typeof marks)

// Special loops in js
for(let i of heros){
    console.log(i);
}

// Using for loop in js
for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}


// Object in js
let student = {
    student1 : 92,
    student2 : 86,
    student3: 81,
    student4: 98,
    student5: 87
}
console.log(student);
let size = 0;
for(let key in student){
    console.log(key);
    console.log(student[key])
    size = size +1;
}
console.log(size)


// loops in string 
let str = "I am jahangir Alom";

for(let i of str){
    console.log(i);
}

for(let i =0; i<str.length; i++){
    console.log(str.charAt(i));
}