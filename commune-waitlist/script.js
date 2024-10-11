const hamburger = document.querySelector(".page-header__hamburger")
const hamburgerIcon = hamburger.querySelector(".material-icons")
const nav = document.querySelector(".page-header__nav")
const validation = new JustValidate(".page-main__form")

hamburger.addEventListener("click", () => {
  if (hamburgerIcon.innerText === "menu") {
    hamburgerIcon.innerText = "close"
  }
  
  else {
    hamburgerIcon.innerText = "menu"
  }
  
  nav.classList.toggle("active")
})



validation
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
