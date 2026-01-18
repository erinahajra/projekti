<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="css/style.css">
   
</head>
<body>

    <script src="js/script.js"></script>
</body>
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevents the page from reloading

        // Change button state
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // Collect Form Data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // --- OPTION: FORM POSTING ---
        // If you are using a backend or a service like Formspree, use this:
        try {
            /* const response = await fetch('YOUR_BACKEND_URL_HERE', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            */

            // Simulation of a successful send
            setTimeout(() => {
                alert('Thank you, ' + formData.name + '! Your message has been sent.');
                contactForm.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);

        } catch (error) {
            alert('Oops! There was an error sending your message.');
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
        }
    });
});
</html>