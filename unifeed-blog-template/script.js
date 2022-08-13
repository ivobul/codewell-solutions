const mobileMenu = document.querySelector(".site-header__mobile");
const mainNav = document.querySelector(".main-nav");

mobileMenu.addEventListener("click", () => {
  mainNav.classList.toggle("active")
})