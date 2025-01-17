let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body = document.querySelector("body");
body.prepend(newBtn);