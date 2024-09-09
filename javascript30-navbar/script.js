const mobileMenu = document.querySelector(".page-header__mobile-menu")
const mainNavElem = document.querySelector(".page-header__main-nav")
const secondaryNavElem = document.querySelector(".page-header__secondary-nav")
const closeIcon = document.querySelector(".page-header__dropdown-top-icon")
const dropdownElem = document.querySelector(".page-header__dropdown")
const navLink1 = document.querySelector("#main-nav-link-1")

mobileMenu.addEventListener("click", () => {
  mainNavElem.classList.toggle("active-display-flex")
  secondaryNavElem.classList.toggle("active-display-flex")
})

closeIcon.addEventListener("click", () => {
  dropdownElem.classList.remove("active-display-block")
})

navLink1.addEventListener("click", () => {
  dropdownElem.classList.toggle("active-display-block")
})
