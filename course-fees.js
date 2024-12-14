// Sample list of available courses with fees
const availableCourses = [
  { id: 1, name: "Introduction to Programming", fee: 400 },
  { id: 2, name: "Data Structures", fee: 350 },
  { id: 3, name: "Web Development", fee: 350 },
  { id: 4, name: "Machine Learning Basics", fee: 400 }
];

// Function to load available courses with checkboxes
function loadAvailableCourses() {
  const courseSelection = document.getElementById("course-selection");
  courseSelection.innerHTML = ""; // Clear previous content

  availableCourses.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.className = "course-item";
    courseItem.innerHTML = `
      <input type="checkbox" id="course-${course.id}" value="${course.id}">
      <label for="course-${course.id}">${course.name} - Fee: $${course.fee}</label>
    `;
    courseSelection.appendChild(courseItem);
  });
}

// Function to calculate and display fees for selected courses
function calculateSelectedFees() {
  const selectedFeeList = document.getElementById("selected-fee-list");
  selectedFeeList.innerHTML = ""; // Clear previous content
  let totalSelectedFee = 0;

  availableCourses.forEach(course => {
    const checkbox = document.getElementById(`course-${course.id}`);
    if (checkbox.checked) {
      // If course is selected, display it and add to total
      const feeItem = document.createElement("div");
      feeItem.className = "course-item";
      feeItem.innerHTML = `${course.name} - Fee: $${course.fee}`;
      selectedFeeList.appendChild(feeItem);
      totalSelectedFee += course.fee;
    }
  });

  // Display the total fee for selected courses
  document.getElementById("selected-total-amount").textContent = `$${totalSelectedFee}`;
}

// Load available courses when the page loads
window.onload = function() {
  loadAvailableCourses();
};
