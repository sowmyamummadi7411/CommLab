document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Form submitted successfully!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
            contactForm.reset();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});