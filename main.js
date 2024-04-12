const slideShowItems  = document.querySelectorAll(".slideShowItem");


let currentSlideShowIndex = 0;

enableSlide(currentSlideShowIndex);

function enableSlide(passedIndex){
    slideShowItems.forEach((element) => {
        element.style.display = "none";
    }
    )
    slideShowItems[passedIndex].style.display = "flex";
}


function navigateSlideShow() {
    currentSlideShowIndex++;
    if(currentSlideShowIndex > slideShowItems.length - 1){
        currentSlideShowIndex = 0;
    }
    enableSlide(currentSlideShowIndex);


    
}

setInterval(navigateSlideShow, 4000)