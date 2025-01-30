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

function getData(dataId, getNextData){ //2 sec
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000)
}

getData(1, ()=> {
    getData(2, () => {
        getData(3)
    });
})