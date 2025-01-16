// const student = [
//     {
//         name: "Jahangir",
//         score: 96
//     },
//     {
//         name: "Tahmid",
//         score: 79
//     },
//     {
//         name: "Aasia",
//         score: 85
//     }
// ];

// let sum =0;

// for(let i=0; i<student.length; i ++){
//     console.log(student[i]);
//     console.log(student[i].score);
//     console.log(student[i].name)
//     sum = sum + student[i].score;
// }
// console.log(sum);


// const employee = {
//     name: "Rounak das",
//     id: 12345
// }

// console.log(employee);

// employee.name = "Jahangir";
// console.log(employee);


// Square of each value of array using forEach loop

let arr = [2, 3,4,5,6];

const calSquare = (val) =>{
    console.log(val*val)
}

arr.forEach(calSquare)


let arr1 = [2, 3, 4, 5, 6];
let squares = []; // Create an empty array to store the squares

const calSquare1 = (val) => {
    squares.push(val * val); // Calculate the square and store it in the array
};

arr.forEach(calSquare1); // Iterate through the array using forEach
console.log(squares); // Output the array of square values
