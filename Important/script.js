// let today = new Date();
// let day = today.getDay();

// let dataList = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"];

// console.log("Today day is: ", dataList[day]);

// let hr = today.getHours();
// let min = today.getMinutes();
// let sec = today.getSeconds();
// let s = "AM";
// if(hr>12){
//     hr = hr -12;
//     s = "PM"
// }

// console.log("Time is: ", `${hr} ${s}: ${min}: ${sec}`)





// Current data in variopurs format.

// let today = new Date();
// console.log(today);

// let date = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();

// if(date < 10){
//     date = "0"+ date;
// };

// if (month < 10){
//     month = "0"+ month;
// }

// var result = month + "/" + date + "/" + year;
// console.log(result);

// var result = date + "-" + month + "-" + year;
// console.log(result);




// Calculate the area triabgle;

// let a = parseFloat(prompt("Enter one number"));
// let b = parseFloat(prompt("Rnter second number"));
// let c = parseFloat(prompt("enter third number"));

// let s = (a + b + c)/2;

// let area = Math.sqrt(s * (s-a)*(s-b)*(s-c));
// console.log(area)



// Change the string

// let str = prompt("Enter a single word");
// let str = "Jahangir";
// let str2 = "";

// for(let i = str.length-1; i>=0; i --){
//     str2 = str2 + str[i];
// }
// console.log(str2)


// Leap Year

// function leapYear(year){
//     return (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
// }
// console.log(leapYear(2017))


// Random gussing number

let number = parseFloat(prompt("Enter number to guess"));
let n = 10;

if(number === n){
    alert("Good! Matched");
}else{
    alert("Not matched")
}