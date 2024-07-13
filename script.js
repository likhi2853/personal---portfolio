document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if(name && email && subject && message) {
        alert('Thank you for your message!');
        // Code to send the form data to your email or server
    } else {
        alert('Please fill out all fields.');
    }
});
