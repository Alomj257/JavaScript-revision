// Print all the even number from 0 to 100;

for(let i=0; i<=100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

let i = 0;
while(i<=100){
    if(i%2 !==0){
        console.log("Odd number is: ",i);
    }
    i++;
}

// Game number - guessing the game number

// let gameNumber = 25;
// let userInput = parseFloat(prompt("Enter guessing number"));

// if(gameNumber === userInput){
//     alert("You guess the correct number");
// }else{
//     alert("Nope.... Try again");
// }

let gameNumber = 25;
let userInput = parseFloat(prompt("Enter guessing number"));

while(userInput !== gameNumber){
   userInput = parseFloat(prompt("You entered wrong number... please enter correct number"));
}
console.log("Congratulations you entered right number")