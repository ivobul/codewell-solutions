const hamburger = document.querySelector(".page-header__hamburger");
const nav = document.querySelector(".page-header__nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active")
})
