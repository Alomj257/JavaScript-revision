// More methos in array

//map method

let arr = [1,2,3,4,5];

let newArr = arr.map((val) => {
    return val*3;
})
console.log(newArr)


// filter method 

let number = [11,12, 13, 14, 15, 16];

let evenNumber = number.filter((val) => {
    return val%2 === 0;
})
console.log(evenNumber);

let grtNumber = number.filter((val) => {
    return val >= 15;
});
console.log(grtNumber)

// Reduce method

let ar = [1,2,3,4,5,6];

let sum= ar.reduce((res, curr) => {
    return res + curr;
});
let avg = sum/ar.length;
console.log(avg)
console.log(sum)


let largest = ar.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
})
console.log(largest)