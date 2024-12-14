function login() {
  const role = document.getElementById("role").value;
  if (role === "student") {
    window.location.href = "student-dashboard.html";
  } else if (role === "admin") {
    window.location.href = "admin-dashboard.html";
  }
}
