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

// let number = parseFloat(prompt("Enter number to guess"));
// let n = 10;

// if(number === n){
//     alert("Good! Matched");
// }else{
//     alert("Not matched")
// }



// Multiple and divison

// function divi(a,b){
//     return a/b;
// }
// const multi = (a,b) => {
//     return a*b;
// }

// console.log(multi(2,3));
// console.log(divi(20,4));



// Degree to F

// const cTF = (c) => {
//     let f = (c/5)*9 +32;
//     console.log(`the conversion ${c} to ferhenhite is ${f}`)
// }

// const fTC = (f) => {
//     let c = ((f-32)/9)*5;
//     console.log(`the conversion ${f} to celcious is ${c}`);
// }

// fTC(45);
// cTF(60);



//get url
// alert(document.URL)



// DIFFERENCE BETWEEN NUMBER AND THE 13, IF THE NUMBER IS GREATER THEN 13 THEN RETURN THE DOUBLR OF THE DIFFERENCE

// let number = parseFloat(prompt("Enter a number"));

// let num = 13;
// let diff;

// if(number >13){
//     diff = 2*(number-num);
// }else{
//     diff = number - num;
// }

// console.log(diff)


// SUM OF TWO NUMBER, IF THE TWO NUMBER ARE SAME THEN RETURN 3 TIME OF THE SUM

// const Add = (a,b) => {
//     if(a === b){
//         return (a+b)*3;
//     }else{
//         return a+b;
//     }
// }

// let sum = Add(10,10);
// console.log(sum)


// Difference Between Number and 19 (Triple if >19)

// const diff = (a) => {
//     let n =19;
//     if(a>19){
//         return (a-n)*3;
//     }else{
//         return n-a
//     }
// }

// let result = diff(32);
// console.log(result)



// Remove the character from string

// let str = "Jahangir";
// let str1 = str.slice(0,2);
// let str2 = str.slice(3,str.length)
// console.log(str1.concat(str2))


//Swap First and Last Characters in String

// let str = "Bano";

// let midString = str.slice(1, str.length-1);
// let newString = str.charAt(str.length-1).concat(midString).concat(str.charAt(0));
// console.log(newString)



//24. Add First Character to Front and Back of String

// let str = "Jahangir";
// let fC = str.charAt(0);

// let newString = fC.concat(str).concat(fC);
// console.log(newString)


// function addCharToString(str){
//     let fc = str.charAt(0);
//     let newString = fc.concat(str).concat(fc);
//     return newString;
// }

// console.log(addCharToString("Alom"))



//Check if Number is Multiple of 3 or 7


// let n = parseFloat(prompt("Enter the number"));

// if (n % 3 === 0 && n%7 === 0){
//     console.log("Number is divisble by 3 and 7")
// }else{
//     console.log("Number is not divisible by 3 and 7")
// }



// Add Last 3 Characters to Front and Back of String

// let str = "Jahangir";
// let str1 = str.slice(0,3);
// let newString = str1.concat(str).concat(str1);
// console.log(newString);


// Check if String Starts with 'Java' 

// const findJava = (str) => {
//     let str1 = str.slice(0, 4);

//     // if (str1 === "Java") {
//     //     return true;
//     // } else {
//     //     return false
//     // }

//     return str1 === "Java"? true: false;
// }

// let result = findJava("JahaAasia");
// console.log(result)


// Practice 
// let str = "Aasia Bano jahangir"
// let strf = str.slice(0,str.length-4)
// let str1 = str.slice(str.length-4,str.length);
// let str2 = "";
// for(let i = str1.length-1; i>=0; i--){
//     str2 = str2 + str1.charAt(i)
// }
// let result = str2.concat(strf);
// console.log(result)



//Check a given string contains 2 to 4 numbers of a specified character

// function findChar(str, s) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === s) {
//             count++;
//         }
//     }
//     return count >= 2 && count <= 4;
// }

// let result = findChar("IamJahangir", "a");
// console.log(result);

// let result1 = findChar("imihdhjf", "y");
// console.log(result1);



// Modify String Based on Length (First 3 Lowercase/Uppercase)

// const modiString = (str) => {
//     let newString = str.slice(0,3);
//     let endString = str.slice(3, str.length);
//     let capNewString = newString.toUpperCase();
//     let result = capNewString.concat(endString);
//     return result;
// }

// let result = modiString("aasia")
// console.log(result)


// let str = "Jahangir";
// let newString = "";
// for(let i =0; i<str.length; i++){
//     if(i>=0 && i<3){
//         newString = newString + str.charAt(i).toUpperCase();
//     }else{
//         newString = newString + str.charAt(i);
//     }
// }
// console.log(newString)


// Sum Two Integers and Return Based on Range
// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 

// const Add = (a,b) => {
//     let sum = a+b;
//     if(sum >40 && sum <80){
//         return 65;
//     }else{
//         return 80;
//     }
// }

// let result = Add(40,45);
// console.log(result);
// let result1 = Add(45,23)
// console.log(result1);



// 40. Check if Integer is 8 or Difference/Sum Equals 8
// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  


// function condiTwo(a,b){
//     if(a === 8 || b === 8){
//         return true;
//     }else{
//         if(a>b){
//             if((a-b) === 8){
//                 return true
//             }else{
//                 return false
//             }
//         }else{
//             if((b-a) === 8){
//                 return true
//             }else{
//                 return false
//             }
//         }
//     }
// }

// let result = condiTwo(8,38);
// console.log(result)



// Riverse a string

// const revString = (str) => {
//     let newString = "";
//     for(let i = str.length - 1; i>=0; i--){
//         newString = newString + str.charAt(i);
//     }
//     return newString;
// }

// let result = revString("I am jahangir Alom");
// console.log(result);


// 50. Capitalize First Letter of Each Word in String

// let str = "jahangir";
// let str1 = "";
// for(let i =0 ; i<str.length; i++){
//     if(i === 0){
//         str1 = str1 + str.charAt(0).toUpperCase();
//     }else{
//         str1 = str1 + str.charAt(i);
//     }
// }

// console.log(str1);

// let str = "i am jahangir alom aasia's husband";
// let strArr = str.split(" ");

// for(let i =0 ; i<strArr.length; i++){
//     strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1);
// }
// let newString = strArr.join(" ");
// console.log(newString);


// const capFirst = (str) => {
//     let strArr = str.split(" ");
//     for(let i =0; i<strArr.length ; i++){
//         strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
//     }
//     return strArr.join(" ")
// }

// let result = capFirst("i am jahangir alom");
// console.log(result)


// Sort Letters Alphabetically in String

// let string = "jahangir";
// let strArr = string.split("");
// let newSting = strArr.sort().join("")
// console.log(newSting)


// const sortString = (str) => {
//     let strArr = str.split("");
//     return strArr.sort().join("");
// }

// let result = sortString("jahangir");
// console.log(result)


// 54. Count Vowels in String

// const countVowels = (str) => {
//     let count = 0;
//     for(i of str){
//         if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" || i === "A" || i === "E" || i === "I" || i === "O" || i === "U"){
//             count ++;
//         }
//     }
//     return count;
// }

// let result = countVowels("Aasia");
// console.log(result)


// Replace charater from string

// let str = "Jahaingir";
// let newSting = str.replace("i", "K");
// console.log(newSting)


// const replaceChar = (str) => {
//     let newSting = str.replace(/[$,&,*]/g, ",");
//     return newSting;
// }

// let result = replaceChar("jaha$g&i*r");
// console.log(result)


// 58. Four Copies of Last 3 Characters

// function fourCopy (str){
//     let newString = "";
//     let lastSub = str.slice(str.length-3, str.length);
//     newString = lastSub + lastSub +lastSub+ lastSub;
//     return newString;
// }

// let result = fourCopy("Alom")
// console.log(result)

// 59. Extract First Half of Even-Length String

// let string = "Jahangir";
// let len = string.length;
// let newSting = "";
// if(len % 2 === 0){
//     newSting = string.slice(0,string.length/2)
// }else{
//     newSting;
// }
// console.log(newSting)


// Remove First and Last Characters in String

// let str = "Jahangir";
// let newSting = str.slice(1,str.length-1);
// console.log(newSting)


// 61. Concatenate Two Strings Without First Character

// let str1 = "Jahangir";
// let str2 = "Aasia";

// let result = str1.slice(1,str1.length).concat(str2.slice(1,str2.length));
// console.log(result);


// 62. Move Last 3 Characters to Start of String

// let str = "Jahangir";
// let lastStr = str.slice(str.length-3, str.length);
// let firstStr = str.slice(0,str.length-3);
// let result = lastStr.concat(firstStr);
// console.log(result);



// 64. Concatenate Strings with Matching Length

// const conTwoString = (str1, str2) => {
//     let str1Length = str1.length;
//     let str2Length = str2.length;

//     if(str1Length === str2Length){
//         return str1.concat(str2);
//     }else{
//         return "Length of two string are not matched"
//     }
// }

// let result = conTwoString("Jahangir", "Tahmiddd");
// console.log(result);



// 65. Check if String Ends with ' Script'


// const endScript = (str) => {
//     let endString = str.slice(str.length-6, str.length);
//     if(endString === "Script"){
//         return "Yes, string ends with Script"
//     }else{
//         return "No, string is not ends with Script"
//     }
// }

// let result = endScript("i am javaScript");
// console.log(result);


// 66. Return City Name if Starts with 'Los' or 'New' 

// const cityName = (str) => {
//     if(str.slice(0,3) === "Los" || str.slice(0,3) === "New"){
//         return str;
//     }else{
//         return "Not started with los and new";
//     }
// }

// let result = cityName("Los Angle");
// console.log(result)


// 69. Sum of 3 Elements in Array (Length 3)

// const sumArr = (arr) => {
//     let sum =0;
//     console.log(arr)
//     for(let i =0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// let array = [2,3,4,5,6,7,8,98,98]
// let result = sumArr(array);
// console.log(result)



// 71. Check if 1 is First/Last Element in Array

// const checkFist = (arr) => {
//     for(let i =0; i<arr.length; i++){
//         if(arr[0] === 1 && arr[arr.length -1] === 1){
//             return "Found 1 is First and last element of array";
//         }else{
//             return "Not found"
//         }
//     }
// }

// let Array = [1,3,4,2,43,1]
// console.log(checkFist(Array));



// 72. Check if First and Last Elements Are Same

// const checkFirstAndLastSame = (arr) => {
//     for(let i =0; i<arr.length ; i++){
//         if(arr[0] === arr[arr.length-1]){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// let array = [23,4,5,678,27]
// let result = checkFirstAndLastSame(array);
// console.log(result);


// 74. Set All Elements to Largest of First/Last in Array

// const setLargestArray = (arr) => {
//     let max;
//     for(let i =0; i<arr.length ; i++){
//         if(arr[0] > arr[arr.length-1]){
//             max = arr[0];
//         }else{
//             max = arr[arr.length-1]
//         }
//     }
    
//     let newArr = [];
//     for(let i =0; i<arr.length; i++){
//         newArr.push(max)
//     }
//     return newArr;
// }

// let array = [20,40,50];
// let result = setLargestArray(array);
// console.log(result);


// 76. Create Array with First/Last Elements from Array

// let arr = [34,56,67,78,90];

// let newArr = [];
// for(let i =0; i<arr.length; i++){
//     if(i === 0){
//         newArr.push(arr[0])
//     }
//     if(i === arr.length-1){
//         newArr.push(arr[arr.length-1])
//     }
// }
// console.log(newArr);



// 83. Find Longest String in Array


// const longestArray = (arr) => {
//     let longest = "";
//     for(let i=0; i< arr.length ; i++){
//         if(arr[i].length > longest.length){
//             longest = arr[i];
//         }
//     }
//     return longest;
// }

// let array = ["Alom", "Jahangir", "Tahmid", "Hassan ali muhammed", "Alom ji"]
// let result = longestArray(array);
// console.log(result);



// 83. Find Longest Number in Array

// function largestArray(arr){
//     let max = arr[0];
//     for(let val of arr){
//         if(val>max){
//             max = val;
//         }
//     }
//     return max;
// }

// let array = [2,34,54,93, 1,23,87,45];
// let result = largestArray(array);
// console.log(result);


// Another aproach


// let largestArray = (arr) => {
//     let max = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let array = [354,4765,983978,5865876,1,2,3,4,5,65]
// console.log(largestArray(array));


// reduce function

// const largestNumber = (array) => {
//     return array.reduce((max,current) => current > max ? current : max)
// }
// let arr = [354,4765,983978,9,1,2,3,4,56666666666666,65]
// let result = largestNumber(arr);
// console.log(result);


// Min number from array

// const minNumber = (arr) => {
//     return arr.reduce((min, current) => current < min ? current :min);
// }

// let array = [4,3,6,7,-8,1,4,0];
// let result = minNumber(array);
// console.log(result);