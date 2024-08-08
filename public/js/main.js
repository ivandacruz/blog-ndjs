const { response } = require("express");

document.addEventListener('DOMContentLoaded', function () {
    fetch('/posts')
    .then((response) => response.json())
    .then((posts) => {
        const postContainer = document.getElementById('posts');
        postContainer.innerHTML = posts
        .map(
            (post) => `
            <div class="post ${post.category}">
            </div>
            `
        )
    });
});