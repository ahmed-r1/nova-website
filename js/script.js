const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
});

document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
        nav.classList.remove("nav-open");
    }
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("nav-open");
    });
});