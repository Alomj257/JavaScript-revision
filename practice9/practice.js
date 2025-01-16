// Filter out the marks of students > 90

let marks = [97, 97, 98, 96, 46, 67, 87, 99];

let filterMarks = marks.filter((val) => {
    return val> 90;
})
console.log(filterMarks);


// sum and product of each array

let n = parseFloat(prompt("Enter a number"));

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}

let sum = arr.reduce((prev, curr) => {
    return prev+curr;
})
console.log(sum);

let product = arr.reduce((prev, curr) => {
    return prev*curr;
})
console.log(product)