let num = prompt("Enter a number");
if(num % 3 === 0){
    console.log(num,"is Multiple of 3")
}else{
    console.log(num,"is Not multiple of 3")
}

// Grade
let marks = prompt("Enter total marks");
let grade;

if(marks >=80 && marks<=100){
    grade = 'A'
}else if(marks>=70 && marks<80){
    grade = 'B'
}else if(marks>60 && marks<70){
    grade = 'C'
}else if(marks>50 && marks<60){
    grade = 'D'
}else{
   grade = 'Fail'
}
console.log(grade);
