// Add this to your `src/javascript.js` file or inside a script tag in your HTML
function spinLogo() {
    const logo = document.getElementById("logo");

    // Add the spin class to trigger the animation
    logo.classList.add("spin");

    // Optionally, remove the spin class after the animation completes
    setTimeout(() => {
        logo.classList.remove("spin");
    }, 1000); // Match this duration to the animation time (1s)
}

// Add the event listener to trigger spinLogo on logo click
document.getElementById("logo").addEventListener("click", spinLogo);
