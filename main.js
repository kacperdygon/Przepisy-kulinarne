const slideShowItems  = document.querySelectorAll(".slideShowItem");
const body = document.querySelector("body");
const carousel = document.querySelector(".slideShow");
const navUl = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navHamburger = document.querySelector("nav img");

let isNavOpen = false;
navHamburger.addEventListener("click", alterNav)

navUl.style.left = "-200%";


    let currentSlideShowIndex = 0;
    carousel.scrollTo(0, 0);

function navigateCarousel() {
    currentSlideShowIndex++;
    if(currentSlideShowIndex == slideShowItems.length) {
        carousel.scrollTo(0, 0);
        currentSlideShowIndex = 0;
    } else {
        carousel.scrollBy(window.innerWidth, 0);
    }
    
}

function alterNav(){
    if (isNavOpen){
        navUl.style.left = "-200%";
        isNavOpen = false;
    } else {
        navUl.style.left = "5px";
        isNavOpen = true;
    }
    
}

setInterval(navigateCarousel, 5000)
