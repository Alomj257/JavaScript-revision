// Take string as an argument & return the number of vowels in the string


// Normal function
function calVowels(str){
    let count =0;
    let str1 = str.toLowerCase();
    for(let i=0; i<str1.length; i++){
        if(str1[i] === "a" || str1[i] === "e" || str1[i] === "i" || str1[i] === "o" || str1[i] === "u"){
            count = count +1;
        }
    }
    return count;
}

let count = calVowels("Hello i am jahangir alom");
console.log(count);

// Arrow function

const countVowels = (str) => {
    let count =0;
    let str1 = str.toLowerCase();
    for(let char of str1){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count ++;
        }
    }
    return count;
}

let result = calVowels("Hello i am jahangir alom");
console.log(result);