// Insert element

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, i am jahangir </i>";
let body = document.querySelector("body");
body.prepend(newHeading);

// Delete element
let para = document.querySelector('p');
para.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";

// console.log(newBtn)
// console.log(newBtn.innerText);

// let div = document.querySelector("div");
// div.append(newBtn);
// // div.prepend(newBtn)

// div.before(newBtn)

// let para = document.querySelector("p");
// para.after(newBtn)

