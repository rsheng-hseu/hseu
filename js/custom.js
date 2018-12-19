
function plusSlides(n, slide_name, dot_name) {
    clearTimeout(timer);
    showSlides(slideIndex += n, slide_name, dot_name);
}

function currentSlide(n, slide_name, dot_name) {
    clearTimeout(timer);
    showSlides(slideIndex = n, slide_name, dot_name);
}

function showSlides(n, slide_name, dot_name) {
    var i;
    var slides = document.getElementsByClassName(slide_name);
    var dots = document.getElementsByClassName(dot_name);
    if (n==undefined){n = ++slideIndex}
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active_c", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active_c";
    timer = setTimeout(function() {
        showSlides(undefined, slide_name, dot_name);
    }, 2000)
}
