const hamburger = document.querySelector(".page-header__hamburger");
const hamburgerIcon = hamburger.querySelector(".material-icons");
const nav = document.querySelector(".page-header__nav");

hamburger.addEventListener("click", () => {
  if (hamburgerIcon.innerText === "menu") {
    hamburgerIcon.innerText = "close";
  }
  else {
    hamburgerIcon.innerText = "menu";
  }
  
  nav.classList.toggle("active");
});
