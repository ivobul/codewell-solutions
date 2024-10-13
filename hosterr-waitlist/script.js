const hamburgerIconElem = document.querySelector(".page-header__hamburger-icon")
const mobileNavElem = document.querySelector(".mobile-nav")
const closeIconElem = document.querySelector(".mobile-nav__close-icon")
//const secondaryNavElem = document.querySelector(".page-header__right")

hamburgerIconElem.addEventListener("click", () => {
  mobileNavElem.classList.add("active")
})

closeIconElem.addEventListener("click", () => {
  mobileNavElem.classList.remove("active")
})


