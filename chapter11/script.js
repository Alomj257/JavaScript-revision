const student = {
    name: "Jahangir",
    marks: 94.4,
    printMarks : function(){
        console.log(this.marks)
    }
}

console.log(student);
console.log(student.marks)
console.log(student["marks"]);
student["marks"] = 90;
console.log(student.marks)