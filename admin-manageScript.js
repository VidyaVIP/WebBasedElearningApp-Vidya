let students = [];

// Function to add a new student
function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById("student-name").value;
    const email = document.getElementById("student-email").value;
    const course = document.getElementById("student-course").value;

    const newStudent = { id: Date.now(), name: name, email: email, course: course };
    students.push(newStudent);
    document.getElementById("student-form").reset();
    displayStudents();
}

// Function to display students in the table
function displayStudents() {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = "";
    students.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>
                <button onclick="editStudent(${student.id})">Edit</button>
                <button onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

// Function to delete a student
function deleteStudent(studentId) {
    students = students.filter(student => student.id !== studentId);
    displayStudents();
}

// Function to edit a student record
function editStudent(studentId) {
    const student = students.find(student => student.id === studentId);
    if (student) {
        document.getElementById("student-name").value = student.name;
        document.getElementById("student-email").value = student.email;
        document.getElementById("student-course").value = student.course;
        deleteStudent(studentId); // Remove the student from the list before editing
    }
}
