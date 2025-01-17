// get attribute value

let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.dir(para);

let className = para.getAttribute("class");
console.log(className)

//set attribute value

para.setAttribute("class", "123");

// Acess style
let box = document.querySelector("#box");
console.log(div.style)
div.style.backgroundColor = "red";
div.style.fontSize = "20px"
div.innerText = "Hello india"
