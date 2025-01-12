// String in js
// 1. Create string

let str = "Jahangir Alom";
console.log(str);
console.log(str.length); // String size
console.log(str[2]);

let str2 = 'Aasia Bano';
console.log(str2); 
console.log(str2.length); // String size

// Template literals
// A way to have embeded expressions in strings

let age = 27;
let str3 = `Hello i am jahangir and my age is ${age}`;
console.log(str3);
console.log(typeof str3)

let obj = {
    item : 'Pen',
    price : 10
}

console.log(`The cost of ${obj.item} is rs ${obj.price}`)

console.log("Jahangir\nAlom");
let string = "I am jahangir \t alom";
console.log(string);
console.log(string.length);

// String methods

let s = "Aasia Bano";
let s1 = s.toUpperCase();
let s2 = s.toLocaleLowerCase();
let s3 = s.trim();
console.log(s);
console.log(s1);
console.log(s2);
console.log(s3);

let st = "Jahangir Alom    ";
st = st.toUpperCase();
console.log(st);
console.log(st.trim());
console.log(st.slice(5,8));


let strr = "abncde";
console.log(strr.slice(2,5));
console.log(strr[5]);
console.log(strr.charAt(5));


let t1 = "Jahangir";
let t2 = "Aasia";
let result = t1.concat(t2);
let ans = t1 + t2;
console.log(ans);
console.log(result);


let stri = "Hello" + 123 + "Jahangir";
console.log(stri);

let a = "123" + "Hello";
console.log(a);

let h = "Hello";
console.log(h.replace('o','jahangi'));