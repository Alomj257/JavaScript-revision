// Function and method in js

// 1st function

//Funcyion define
function myFunction(){
    console.log("Hi!... I am jahangir");
    console.log("We are learning js")
};

// Function call
myFunction();

// 2nd function

function mySecFunction(msg, n){ // Parameter -> input
    console.log(msg);
    console.log(msg*n); // NaN
    console.log(`${msg} and my marks in js ${n}`);
}

mySecFunction("I love js", 100); // Argument

//3rd function
function Add(x, y){ // x and y parameter
    sum = x+y;
    console.log("Before return");
    return sum;
    console.log("After return"); // Not execuatable
}

let result = Add(100,200);
console.log(result);
