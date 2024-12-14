// Sample list of available courses
const availableCourses = [
  { id: 1, name: "Introduction to Programming" },
  { id: 2, name: "Data Structures" },
  { id: 3, name: "Web Development" },
  { id: 4, name: "Machine Learning Basics" }
];

// Array to store registered courses for the student
let registeredCourses = [];

// Function to load available courses and add "Enroll" buttons
function loadAvailableCourses() {
  const courseSelection = document.getElementById("course-selection");
  courseSelection.innerHTML = ""; // Clear previous content

  availableCourses.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.className = "course-item";
    courseItem.innerHTML = `
      <span>${course.name}</span>
      <button onclick="enrollCourse(${course.id})">Enroll</button>
    `;
    courseSelection.appendChild(courseItem);
  });
}

// Function to enroll in a course
function enrollCourse(courseId) {
  const course = availableCourses.find(c => c.id === courseId);

  // Check if course is already enrolled
  if (course && !registeredCourses.some(c => c.id === courseId)) {
    registeredCourses.push(course);
    displayRegisteredCourses();
  } else {
    alert("You are already enrolled in this course.");
  }
}

// Function to display registered courses in the student dashboard
function displayRegisteredCourses() {
  const courseList = document.getElementById("course-list");
  courseList.innerHTML = ""; // Clear previous content

  if (registeredCourses.length > 0) {
    registeredCourses.forEach(course => {
      const courseItem = document.createElement("div");
      courseItem.className = "registered-course-item";
      courseItem.textContent = course.name;
      courseList.appendChild(courseItem);
    });
  } else {
    courseList.innerHTML = "<p>No registered courses available.</p>";
  }
}

// Load available courses when the page loads
window.onload = function() {
  loadAvailableCourses();
  displayRegisteredCourses();
};
