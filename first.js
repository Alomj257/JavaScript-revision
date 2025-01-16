// Arrow functions
// Compact way of writing a function

// 1st arrow fun

// Normal function

function sum(a,b){
    return a+b;
}

let result = sum(10,20);
console.log(result)

// Arrow function
const arrowSum = (a,b) => {
    return a+b;
}

let ans = arrowSum(2,5);
console.log(ans);

const multi = (x,y) => {
    return x*y;
}
let multiply = multi(5,23);
console.log(multiply)


// To print something

const print = () => {
    console.log("Hello");
}
print();

const res = () => console.log("Hello india!....")
res();