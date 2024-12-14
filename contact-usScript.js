function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Display response message
  const responseMessage = document.getElementById("response-message");
  responseMessage.innerHTML = `
    Thank you, ${name}! <br>
    We have received your message regarding "<strong>${subject}</strong>". <br>
    We will reach out to you at <strong>${email}</strong> as soon as possible.
  `;
  responseMessage.style.display = "block";

  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}
