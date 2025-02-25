/* Mobile navigation */
const hamburgerIcon = document.querySelector(".page-header__mobile-menu")
const mobileNav = document.querySelector(".mobile-nav")
const overlay = document.querySelector(".overlay")
const closeIcon = document.querySelector(".mobile-nav__close-icon")
const html = document.querySelector("html")

hamburgerIcon.addEventListener("click", () => {
  mobileNav.classList.add("active")
  overlay.style.display = "block"
  html.style.overflowY = "hidden"
})

closeIcon.addEventListener("click", () => {
  mobileNav.classList.remove("active")
  overlay.style.display = "none"
  html.style.overflowY = "auto"
})

overlay.addEventListener("click", () => {
  overlay.style.display = "none"
  mobileNav.classList.remove("active")
  html.style.overflowY = "auto"
})

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    html.style.overflowY = "auto"
  }
})