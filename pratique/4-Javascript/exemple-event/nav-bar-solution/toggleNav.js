// connect nav DOM node
const nav = document.querySelector("nav");

// toggles nav class
const toggleNav = () => nav.classList.toggle("nav-open");

// const toggleNav = () => {
//     if (!nav.classList.includes("nav-open")) {
//         nav.classList.add("nav-open")
//     }
//     if (nav.classList.includes("nav-open")) {
//         nav.classList.remove("nav-open")
//     }
// }

// add an eventListener with the right event that triggers the right function
nav.addEventListener("click", toggleNav);


