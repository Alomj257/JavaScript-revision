let today = new Date();
let day = today.getDay();

let dataList = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"];

console.log("Today day is: ", dataList[day]);

let hr = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let s = "AM";
if(hr>12){
    hr = hr -12;
    s = "PM"
}

console.log("Time is: ", `${hr} ${s}: ${min}: ${sec}`)