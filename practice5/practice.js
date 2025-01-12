// Average marks of the entire class

let arr = [85, 97, 44, 37, 76, 60];
let sum =0;
let summ = 0;
let avg;
let Average;

// Using for loops
for(let i=0; i<arr.length; i++){
    summ = summ + arr[i];
}
Average = summ/arr.length;
console.log(Average);


// Using for-of loops
for(let i of arr){
    sum = sum +i;
}
avg = sum/arr.length;
console.log(avg)