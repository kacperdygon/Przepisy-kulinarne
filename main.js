const slideshowItems  = document.querySelectorAll(".slideshow-item");
const body = document.querySelector("body");
const headerSlideshow = document.querySelector("#slideshow");

    let currentHeaderSlideshowIndex = 0;
    headerSlideshow.scrollTo(0, 0);

function navigateHeaderSlideshow() {
    currentHeaderSlideshowIndex++;
    if(currentHeaderSlideshowIndex >= slideshowItems.length) {
        headerSlideshow.scrollTo(0, 0);
        currentHeaderSlideshowIndex = 0;
    } else {
        headerSlideshow.scrollBy(window.innerWidth, 0);
    }
    
}

setInterval(navigateHeaderSlideshow, 5000);
