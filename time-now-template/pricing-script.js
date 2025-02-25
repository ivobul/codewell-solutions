const root = document.querySelector(":root")
const toggle = document.querySelector(".pricing-main__plans-toggle-body")
const inp = document.querySelector("input")
const innerCircle = document.querySelector(".inner-circle")
const price = document.querySelectorAll(".price")
let monthlyPrices = [4, 12, 7]
let yearlyPrices = [3, 10, 6]

const hamburgerIcon = document.querySelector(".pricing-header__mobile-menu")
const mobileNav = document.querySelector(".mobile-nav")
const overlay = document.querySelector(".overlay")
const closeIcon = document.querySelector(".mobile-nav__close-icon")
const html = document.querySelector("html")

/* Toggle switch functionality */
window.addEventListener("load", () => {
  inp.checked = false
  monthlyYearlyPrices()
})

toggle.addEventListener("change", () => {
  if (!inp.checked) {
    monthly()
  } else {
    yearly()
  }
})

function monthly() {
  innerCircle.classList.replace("inner-circle--end", "inner-circle--start")
  root.style.setProperty("--pseudo-before-color", "#252525")
  root.style.setProperty("--pseudo-after-color", "#425466")
  monthlyYearlyPrices()
}

function yearly() {
  innerCircle.classList.replace("inner-circle--start", "inner-circle--end")
  root.style.setProperty("--pseudo-before-color", "#425466")
  root.style.setProperty("--pseudo-after-color", "#252525")
  monthlyYearlyPrices()
}

function monthlyYearlyPrices() {
  if (!inp.checked) {
    price.forEach((item, index) => {
      item.innerText = `${monthlyPrices[index]}`
    })
  } else {
    price.forEach((item, index) => {
      item.innerText = `${yearlyPrices[index]}`
    })
  }
}

/* Mobile navigation */
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