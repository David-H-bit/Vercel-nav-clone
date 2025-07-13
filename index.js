const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobileNav');
const page = document.querySelector(".page-content");
const body = document.querySelector("body");

hamburgerIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    page.classList.toggle('hide');
    body.classList.toggle("hamburger-bgc");
});
