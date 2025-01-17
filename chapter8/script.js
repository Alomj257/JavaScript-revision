let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e.target)
    console.log("Btn 1 was clicked");
    let a = 20;
    let b = 30;
    let sum = a + b;
    sum++;
    console.log(sum);
}

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("Mouse hover");
}
