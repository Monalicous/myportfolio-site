function animateLogo() {
    const logo = document.getElementById('logo');
    const message = document.getElementById('message');
    const typedMessage = document.querySelector('.typed-message');

    // Move the logo to the left
    logo.style.transform = 'translateX(-130px)';

    // Show the typing message after the animation
    setTimeout(() => {
        message.style.display = 'block';
        typedMessage.textContent = "Welcome to My Portfolio!";

        setTimeout(() => {
            message.style.display = 'none';

            typedMessage.textContent = "";

            logo.style.transform = 'translateX(0)';
        }, 5000);
    }, 2000);
}