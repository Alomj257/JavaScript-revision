let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e.target)
//     console.log("Btn 1 was clicked");
//     let a = 20;
//     let b = 30;
//     let sum = a + b;
//     sum++;
//     console.log(sum);
// }

// let box = document.querySelector("div");
// box.onmouseover = () => {
//     console.log("Mouse hover");
// }

//Add event listener
btn1.addEventListener("click", (e) => {
    console.log("Button was clicked -hamdler 1");
})
btn1.addEventListener("click", () => {
    console.log("Button was clicked - handler 2");
})

const handler3 = () => {
    console.log("Button was clicked - handler 3");
};

btn1.addEventListener("click",handler3 )
btn1.addEventListener("click", () => {
    console.log("Button was clicked - handler 4");
})

// Remove event listner
btn1.removeEventListener("click", handler3)
