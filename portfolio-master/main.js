// This file contains the JavaScript code for the webpage. It may include functions for interactivity, such as handling navigation, loading blog posts dynamically, or managing user interactions.

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle navigation between blog posts
    const loadBlogPost = (postId) => {
        const postContainer = document.getElementById('post-container');
        fetch(`blog/${postId}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                postContainer.innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };

    // Example of loading a specific blog post on page load
    loadBlogPost('post1');

    // Add event listeners for navigation buttons if they exist
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const postId = event.target.dataset.postId;
            loadBlogPost(postId);
        });
    });
});