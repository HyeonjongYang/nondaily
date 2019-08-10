/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.getElementById('header');
    
    if(document.documentElement.scrollTop > 70) {
        if(!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function(){
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if(header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click',menuToggle);

/* WELCOME AREA */
var imageSlideIndex = 1;
showImageSlides(imageSlideIndex);

function imageSlideTimer() {
    plusImageSlides(1);
}

var imageTimer = setInterval(imageSlideTimer, 3500);

function plusImageSlides(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3500);
    
    showImageSlides(imageSlideIndex += n);
}

function currentImageSlide(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 3500);
    
    showImageSlides(imageSlideIndex = n);
}

function showImageSlides(n) {
    var i;
    var slides = document.getElementsByClassName('image-slide');
    var dots = document.getElementsByClassName('dot');
    if(n > slides.length) { imageSlideIndex = 1 }
    if(n < 1) { imageSlideIndex = slides.length }
    for(i = 0; i < slides.length ; i++) {
        slides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[imageSlideIndex - 1].style.display = 'block';
    dots[imageSlideIndex - 1].className += ' active';
}

document.getElementById('imagePrev').addEventListener('click', plusImageSlides.bind(null, -1));
document.getElementById('imageNext').addEventListener('click', plusImageSlides.bind(null, 1));
    
document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null, 1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null, 2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null, 3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null, 4));

/* NAVBAR ANCHOR */
function moveTo(id) {
    if(id == 'brand') {
        window.scrollTo(0,0);
    }else{
        window.scrollTo(0, document.getElementById(id).offsetTop - 70);
    }

    document.getElementById('menu').classList.remove('show');
}

document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null,'brand'));
document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null,'about'));
document.getElementById('navbarService').addEventListener('click', moveTo.bind(null,'service'));
document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null,'portfolio'));
document.getElementById('navbarReview').addEventListener('click', moveTo.bind(null,'review'));

/* SERVICE AREA */
