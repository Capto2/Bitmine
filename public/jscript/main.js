const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('cloe');
    navbar.classList.toggle('open');
}