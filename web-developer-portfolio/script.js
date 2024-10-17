const mobileIconElem = document.querySelector(".page-header__mobile-icon")
const mobileNavElem = document.querySelector(".page-header__mobile")

mobileIconElem.addEventListener("click", () => {
  if (mobileIconElem.innerText === "menu") {
    mobileIconElem.innerText = "close"
  }
  else {
    mobileIconElem.innerText = "menu"
  }
  
  mobileNavElem.classList.toggle("active")
})
