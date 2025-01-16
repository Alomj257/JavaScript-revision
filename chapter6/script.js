let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Jahangir Alom";  //Concatenate


let div = document.querySelectorAll(".box");

let index =0;
for(let d of div){
    console.log(d.innerText)
    d.innerText = `new unique value ${index}`;
    index ++;
}