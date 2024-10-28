const hamburgerIconElem = document.querySelector(".page-header__hamburger-icon")
const mobileNavElem = document.querySelector(".mobile-nav")
const overlayElem = document.querySelector(".overlay")
const closeIconElem = document.querySelector(".mobile-nav__close-icon")

hamburgerIconElem.addEventListener("click", () => {
  mobileNavElem.classList.add("active")
  overlayElem.style.display = "block"
})

closeIconElem.addEventListener("click", () => {
  mobileNavElem.classList.remove("active")
  overlayElem.style.display = "none"
})

overlayElem.addEventListener("click", () => {
  overlayElem.style.display = "none"
  mobileNavElem.classList.remove("active")
})

// Form Validation
const validator = new JustValidate(".page-main__form", {
  tooltip: {
    position: "top",
  },
})

validator
  .addField("#email", [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ])
  .onSuccess(() => {
    document.querySelector(".page-main__form").submit();
  })
