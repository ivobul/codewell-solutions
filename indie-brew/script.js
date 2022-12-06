const mobileMenu = document.querySelector(".page-header__mobile-menu");
const navigation = document.querySelector(".page-header__nav");

mobileMenu.addEventListener("click", () => {
  navigation.classList.toggle("active")
})