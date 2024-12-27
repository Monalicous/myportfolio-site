function showMessage(response) {
    new Typewriter("#message", {
        strings: "Welcome to my portfolio website I hope you like it...😁",
        autoStart: true,
        delay: 100,
        cursor: "",
    });

    let mainElement = document.querySelector(".hidden");
    mainElement.classList.remove("hidden");
}

let buttonElement = document.querySelector("#content");
buttonElement.addEventListener('click', showMessage);