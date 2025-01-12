// // Average marks of the entire class

let arr = [85, 97, 44, 37, 76, 60];
let sum =0;
let summ = 0;
let avg;
let Average;

// Using for loops
for(let i=0; i<arr.length; i++){
    summ = summ + arr[i];
}
Average = summ/arr.length;
console.log(Average);


// Using for-of loops
for(let i of arr){
    sum = sum +i;
}
avg = sum/arr.length;
console.log(avg)


// Change the array items have an offer of 10%;

let items = [250, 645, 300, 900, 50];

// for-of loops
for(item of items){
    item = item - item*(10/100);
    console.log(item)
}

// for loop
for (let i =0; i<items.length; i++){
    items[i] = items[i] - items[i]*(10/100);
    console.log(items[i])
}
console.log(items);