const slideShowItems  = document.querySelectorAll(".slideShowItem");
const body = document.querySelector("body");
const carousel = document.querySelector(".slideShow");



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

setInterval(navigateCarousel, 5000)
