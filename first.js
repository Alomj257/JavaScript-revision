// forEcah loops in array

let arr = [1,2,3,4,5]

arr.forEach((val) => {
    console.log(val);
})

let city = ["Karimganj", "Kolkata", "Mumbai"];

city.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})