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


const validator = new JustValidate(".page-main__form", {
  tooltip: {
    position: "top",
  },
})

validator
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email cannot be empty",
    },
    {
      rule: "email",
      errorMessage: "Looks like this is not an email",
    },
  ])
  .onSuccess(() => {
    document.querySelector(".page-main__form").submit()
  })
