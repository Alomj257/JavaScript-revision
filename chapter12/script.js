// Synchoronus and Asynchronous programming

// console.log("1");

// // function Hello(){
// //     console.log("Hello")
// // }
// // setTimeout(Hello, 2000)

// setTimeout(() => {
//     console.log("Hello")
// }, 2000)

// console.log("2");
// console.log("3");


// Callbacks
// function sum(a,b){
//     console.log(a+b)
// }
// function calculotor(a,b, sumCallback){
//     sumCallback(a,b)
// }

// calculotor(1,2, sum)


// Callback hell

// function getData(dataId, getNextData){ //2 sec
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000)
// }

// getData(1, ()=> {
//     getData(2, () => {
//         getData(3)
//     });
// })


// Promises

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("Resoved")
// })

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(dataId);
//             resolve("Success");
//         }, 2000);
//     });
// }
// let result = getData(123)
// console.log(result)


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise")
//         // resolve("Sucess")
//         reject("Network error")
//     })
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fullfiled")
// });
// promise.catch((error) => {
//     console.log(error)
// })



function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 1");
            resolve("Sucess");
        }, 4000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 2");
            resolve("Sucess");
        }, 4000)
    })
}

console.log("Fetcjing data 1")
asyncFunc1().then((res)=> {
    console.log("Fetching data 2")
    asyncFunc2().then((res)=> {
    })
}).catch((err) =>{
    console.log(err)
})