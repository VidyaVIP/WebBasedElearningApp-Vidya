// JavaScript to handle form submission and display posts
document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");
    const postsContainer = document.getElementById("postsContainer");

    // Handle new post submission
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Create a new post element
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <h3>${title}</h3>
            <p><strong>${username}</strong></p>
            <p>${content}</p>
        `;

        // Append the new post to the posts container
        postsContainer.prepend(postElement);

        // Clear the form
        postForm.reset();
    });
});
