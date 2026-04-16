// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {

    // Get the "Let's Start" button and the welcome panel
    const startButton = document.getElementById("startButton");
    const welcomePanel = document.getElementById("welcomePanel");
    const checkInForm = document.getElementById("checkInForm");

    // When the "Let's Start" button is clicked
    startButton.addEventListener("click", function() {
        // Hide the welcome panel
        welcomePanel.style.display = "none";

        // Show the form
        checkInForm.style.display = "block";
    });

    // Handle form submission
    const form = document.getElementById("expoForm");
    form.addEventListener("submit", function(e){
        e.preventDefault(); // Prevent page reload

        // Get user's name from the form
        const name = document.getElementById("name").value;

        // Show a success message
        alert("Great to have you here, " + name + " - hope to see you next year!");
    });
});