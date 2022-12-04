var terms = document.getElementById("terms");
var showSlide = document.getElementById("showSlide");
var images = terms.getElementsByTagName("IMG");
var indexNum = 0;

function renderSlide() {
    showSlide.src = images[indexNum].src;
}
renderSlide();
function nextSlide() {
    if (indexNum + 1 == images.lenght) {
    indexNum = 0;
    } else{
    indexNum++;
}
renderSlide();
}

function previousSlide() {
    if(indexNum - 1 == images.lenght) {
        indexNum = 0;
    } else {
    indexNum--;
    }
    renderSlide();
}