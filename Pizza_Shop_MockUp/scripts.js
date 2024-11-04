// script.js

// Form submission handler to show an alert
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents actual form submission
        alert("Thank you for reaching out! We'll get back to you soon.");
        
        // Clear the form fields after submission
        form.reset();
    });
});