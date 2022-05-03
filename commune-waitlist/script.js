const mobileMenu = document.querySelector(".page-header__mobile-menu");
const navigation = document.querySelector(".main-nav");

mobileMenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
})