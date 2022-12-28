const hamburger = document.querySelector(".site-header__hamburger");
const hamburgerIcon = hamburger.querySelector(".material-icons");
const nav = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  if (hamburgerIcon.innerText === "menu") {
    hamburgerIcon.innerText = "close";
  }
  else {
    hamburgerIcon.innerText = "menu";
  }
  
  nav.classList.toggle("active");
});
