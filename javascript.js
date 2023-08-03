// JavaScript code for additional functionalities

// JavaScript code for additional functionalities
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you can implement code to send the form data to your server or perform any other action.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

 