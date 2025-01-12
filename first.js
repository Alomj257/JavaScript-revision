// for-in loops
// For objects 

const student = {
    name: "Jahangir",
    age: 27,
    cgpa: 8.7,
    isPass: true
}
for(let key in student){
    console.log(key);
    console.log(student[key])
}