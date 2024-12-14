let courses = [];
let quizzes = [];

// Function to add a new course
function addCourse(event) {
    event.preventDefault();
    const courseName = document.getElementById("course-name").value;
    const courseFee = document.getElementById("course-fee").value;

    const newCourse = { id: Date.now(), name: courseName, fee: courseFee };
    courses.push(newCourse);
    document.getElementById("course-form").reset();
    displayCourses();
}

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li");
        li.innerHTML = `${course.name} - Fee: $${course.fee} <button onclick="deleteCourse(${course.id})">Delete</button>`;
        courseList.appendChild(li);
        updateCourseSelect(course.name);
    });
}

// Function to delete a course
function deleteCourse(courseId) {
    courses = courses.filter(course => course.id !== courseId);
    displayCourses();
}

// Function to add a new quiz
function addQuiz(event) {
    event.preventDefault();
    const quizTitle = document.getElementById("quiz-title").value;
    const selectedCourse = document.getElementById("course-select").value;

    const newQuiz = { id: Date.now(), title: quizTitle, course: selectedCourse };
    quizzes.push(newQuiz);
    document.getElementById("quiz-form").reset();
    displayQuizzes();
}

// Function to display quizzes
function displayQuizzes() {
    const quizList = document.getElementById("quiz-list");
    quizList.innerHTML = "";
    quizzes.forEach(quiz => {
        const li = document.createElement("li");
        li.innerHTML = `${quiz.title} (Course: ${quiz.course}) <button onclick="deleteQuiz(${quiz.id})">Delete</button>`;
        quizList.appendChild(li);
    });
}

// Function to delete a quiz
function deleteQuiz(quizId) {
    quizzes = quizzes.filter(quiz => quiz.id !== quizId);
    displayQuizzes();
}

// Function to update course selection in quiz form
function updateCourseSelect(courseName) {
    const courseSelect = document.getElementById("course-select");
    const option = document.createElement("option");
    option.value = courseName;
    option.textContent = courseName;
    if (!Array.from(courseSelect.options).some(opt => opt.value === courseName)) {
        courseSelect.appendChild(option);
    }
}
