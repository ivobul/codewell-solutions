const mobileMenuElem = document.querySelector(".page-header__mobile-menu")
const mainNavElem = document.querySelector(".page-header__nav")
const secondaryNavElem = document.querySelector(".page-header__right")

mobileMenuElem.addEventListener("click", () => {
  mainNavElem.classList.toggle("active")
  secondaryNavElem.classList.toggle("active")
})