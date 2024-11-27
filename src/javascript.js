// JavaScript for toggling the navigation menu on click of logo

document.getElementById('logo').addEventListener('click', function () {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('show'); // Toggle the "show" class to display the menu
});


function showNav() {
    let navList = document.querySelector("#navList");
    navList.classList.toddle('show');
}

let show = document.querySelector("#logo");
show.addEventListener('click', showNav);