// const { response } = require("express");

document.addEventListener('DOMContentLoaded', function () {
    fetch('/posts')
    .then((response) => response.json())
    .then((posts) => {
        const postContainer = document.getElementById('posts');
        postContainer.innerHTML = posts
        .map(
            (post) => `
            <div class="post ${post.category}">
            ${
                post.image
                    ? `<img class="post-img" src="${post.image}" alt="${post.title}">`
                    : ""
            }
                <h3 class="post-category">${post.category}</h3>
            </div>
            `
        )
        .join("");
    })
    .catch((error) => {
        console.error("Error fetching posts:", error);
        const postContainer = document.getElementById('posts');
        postContainer.innerHTML = "<p>Error Fetching posts.</p>";
    });
});