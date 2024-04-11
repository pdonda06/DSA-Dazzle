function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Your existing form handling logic here

    // Display the "Thank you" message
    document.getElementById("thank-you-message").style.display = "block";

    // Redirect to the home page after a delay (e.g., 3 seconds)
    setTimeout(function () {
        window.location.href = "index.html"; // Change "index.html" to your home page URL
    }, 3000); // Adjust the delay as needed (in milliseconds)
}

function showContactForm() {
    var contactForm = document.getElementById("contact-form");
    contactForm.style.display = "block";
}
