const hamburger = document.querySelector(".page-header__hamburger");
const hamburgerIcon = hamburger.querySelector(".material-icons");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  if (hamburgerIcon.innerText === "menu") {
    hamburgerIcon.innerText = "close";
  }
  else {
    hamburgerIcon.innerText = "menu";
  }
  
  mobileNav.classList.toggle("active");
});
