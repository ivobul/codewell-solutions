const mobileMenu = document.querySelector(".page-header__hamburger-icon");
const nav = document.querySelector(".page-header__nav");

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("active")
})