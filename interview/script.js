// let arr = [2,4,5,1,7,87,6];

// const smallElemt = (arr) => {
//     let min = arr[0];
//     for(let i =1; i<arr.length; i++){
//         if(arr[i]< min){
//             min = arr[i];
//         }
//     }
//     console.log(min);
// }

// smallElemt(arr);


// for(let num=2; num<=200; num++){
//     let isPrime = true;
//     for(let i=2; i<num; i++){
//         if(num %i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime) console.log(num);
// }


let n =200;

const findPrime = (n) => {
    for(let num =2; num<=200; num++){
        let isPrime = true;
        for(let i =2; i<num; i++){
            if(num%i === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime === true){
            console.log(num)
        }
    }
}

findPrime(n);