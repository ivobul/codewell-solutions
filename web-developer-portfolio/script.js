const mobileIconElem = document.querySelector(".page-header__mobile-icon")
const materialIconElem = mobileIconElem.querySelector(".material-icons")
const mobileNavElem = document.querySelector(".page-header__mobile")

mobileIconElem.addEventListener("click", () => {
  if (materialIconElem.innerText === "menu") {
    materialIconElem.innerText = "close"
  }
  else {
    materialIconElem.innerText = "menu"
  }
  
  mobileNavElem.classList.toggle("active")
})
