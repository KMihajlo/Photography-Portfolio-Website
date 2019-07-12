const slideshowImages = document.querySelectorAll(".intro .slideshow-img");
const nextImageDelay = 5000;
let count = 0;

slideshowImages[count].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

function nextImage()
{
    //slideshowImages[count].style.opacity = 0;
    slideshowImages[count].style.zIndex = -2;
    const temp = count;
    setTimeout(() => {
        slideshowImages[temp].style.opacity = 0;
    }, 1000);
    count = (count + 1) % slideshowImages.length;
    slideshowImages[count].style.opacity = 1;
    slideshowImages[count].style.zIndex = -1;
}
