// Show hide password input field
const inpPassword = document.querySelector("#usr-password")
const togglePassword = document.querySelector(".show-hide-password")

togglePassword.addEventListener("click", () => {
  if (inpPassword.type === "password") {
    inpPassword.type = "text"
    togglePassword.innerText = "visibility_off"
    togglePassword.setAttribute("title", "Hide the password")
  } 
  else {
    inpPassword.type = "password"; 
    togglePassword.innerText = "visibility"
    togglePassword.setAttribute("title", "Show the password")
  }
})

// Change slides functionality
let slideIndex = 1;
const indicators = document.querySelectorAll(".signup__right-indicator")

indicators.forEach((elem, index, arr) => {
  elem.addEventListener("click", () => {
    currentSlideIndicator(index + 1)
  })
})

/*
https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_dots2
*/
function currentSlideIndicator(n) {
  changeSlidesIndicators(slideIndex = n);
}

function changeSlidesIndicators(n) {
  const slides = document.getElementsByClassName("signup__right-box-item")
  const indicators = document.getElementsByClassName("signup__right-indicator")
  
  if (n > slides.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none" 
  }
  
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].style.backgroundColor = "#A587FF"
  }
  
  slides[slideIndex - 1].style.display = "block"  
  indicators[slideIndex - 1].style.backgroundColor = "#FFFFFF"
}