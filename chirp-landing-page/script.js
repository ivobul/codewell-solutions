const mobileIconElem = document.querySelector(".page-header__mobile-icon")
const navElem = document.querySelector(".page-header__nav")

mobileIconElem.addEventListener("click", () => {
  if (mobileIconElem.innerText === "menu") {
    mobileIconElem.innerText = "close"
  }
  else {
    mobileIconElem.innerText = "menu"
  }
  
  navElem.classList.toggle("active")
})
