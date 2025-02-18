// document.getElementById("studentForm").addEventListener("submit", function(event){
//     event.preventDefault();

//     //Get input values
//     let fullName = document.getElementById("fullName").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let gender = document.querySelector('input[name ="gender"]:checked')?.value;
//     let course = document.getElementById("course").value;
//     let address = document.getElementById("address").value;

//     //Display submitted details
//     let outputDiv = document.getElementById("output");
//     outputDiv.innerHTML = `
//     <p><strong>Full name : </strong> ${fullName}</p>
//     <p><strong>Email : </strong>${email}></p>
//     <p><strong>Phone : </strong>${phone}</p>
//     <p><strong>Gender : </strong>${gender}</p>
//     <p><strong>Course : </strong>${course}</p>
//     <p><strong>Address : </strong>${address}</p>

//     `

//     // Clear form
//     document.getElementById("studentForm").reset();
// })

document.addEventListener("DOMContentLoaded", () => {
    displayStudents();
  });
  
  document
    .getElementById("studentForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      //     //Get input values
      let fullName = document.getElementById("fullName").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let gender = document.querySelector('input[name ="gender"]:checked')?.value;
      let course = document.getElementById("course").value;
      let address = document.getElementById("address").value;
      let editIndex = document.getElementById("editIndex").value;
  
      let students = JSON.parse(localStorage.getItem("students")) || [];
  
      if (editIndex === "") {
        //ADD NEW STUDENT
        students.push({ fullName, email, phone, gender, course, address });
      } else {
        //UPDATE THE STUDENT DETAILS
        students[editIndex] = { fullName, email, phone, gender, course, address };
      }
  
      localStorage.setItem("students", JSON.stringify(students));
      document.getElementById("studentForm").reset();
      document.getElementById("editIndex").value = "";
      displayStudents();
    });
  
  //Function to display students
  function displayStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    console.log(students);
  
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
  
    students.forEach((student, index) => {
      let row = `
      <tr>
      <td>${student.fullName}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.gender}</td>
      <td>${student.course}</td>
      <td>${student.address}</td>
      <td>
      <button class="edit" onClick="editStudent(${index})">Edit</button>
      <button class="delete" onClick="deleteStudent(${index})">Delete</button>
      </td>
      </tr>`;
      studentList.innerHTML +=row;
    });
  }
  
  //Function to edit student
  
  function editStudent(index){
      let students = JSON.parse(localStorage.getItem("students")) || [];
      let student = students[index];
  
      let fullName = document.getElementById("fullName").value = student.fullName;
      let email = document.getElementById("email").value = student.email;
      let phone = document.getElementById("phone").value = student.phone;
      let gender = document.querySelector(input[name="gender"][value="${student.gender}"]).checked = true;
      let course = document.getElementById("course").value = student.course; 
      let address = document.getElementById("address").value = student.address;
      let editIndex = document.getElementById("editIndex").value = index;
  
  }
  
  //Function to delete student
  function deleteStudent(index){
      let students = JSON.parse(localStorage.getItem("students")) || [];
      students.splice(index,1);
      localStorage.setItem("students",
          JSON.stringify(students)
      );
      displayStudents();
  }