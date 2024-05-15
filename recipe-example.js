const body = document.querySelector("body");
const recipeSlideshow = document.querySelector(".recipe-slideshow");
const recipeSlideshowItems = document.querySelectorAll(".recipe-slideshow img");
const recipeSlideshowButtonLeft = document.querySelector(".recipe-slideshow");
const recipeSlideshowButtonRight = document.querySelector(".recipe-slideshow");

let currentRecipeSlideshowIndex = 0;
recipeSlideshow.scrollTo(0, 0);

function navigateRecipeSlideshow() {
    currentRecipeSlideshowIndex++;
    if(currentRecipeSlideshowIndex == recipeSlideshowItems.length) {
        recipeSlideshow.scrollTo(0, 0);
        currentRecipeSlideshowIndex = 0;
    } else {
        recipeSlideshow.scrollBy(window.innerWidth, 0);
    }
    
}

// setInterval(navigateRecipeSlideshow, 5000);

