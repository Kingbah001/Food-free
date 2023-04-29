
let hamburgerdiv = document.querySelector('.harmburger');
let mobileLinks = document.querySelector('.mobile-link-holder');

function dosomething() {
    hamburgerdiv.classList.toggle('showburger')
    mobileLinks.classList.toggle("show-mobile-link-holder")
}
/*
let carousel = document.querySelector('.carousel-container');
let items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let timer = setInterval(moveToNextItem, 3000);

function moveToNextItem() {
    currentIndex++;
    if (currentIndex >= items.lenght) {
        currentIndex = 0;
    }
    carousel.style.transform = 'translateX(-${currentIndex * 100}%)';
 }

var carouselContainer = document.querySelector('.carousel-container');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var itemWidth = document.querySelector('.carousel-item').clientWidth;

function moveCarousel(direction) {
  var currentPosition = parseInt(carouselContainer.style.transform.slice(11));
  if (direction === 'prev') {
    currentPosition += itemWidth;
  } else {
    currentPosition -= itemWidth;
  }
  carouselContainer.style.transform = 'translateX(' + currentPosition + 'px)';
}

prevButton.addEventListener('click', function() {
  moveCarousel('prev');
});

nextButton.addEventListener('click', function() {
  moveCarousel('next');
});

setInterval(function() {
  moveCarousel('next');
}, 5000);

let carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNext() {
  let nextIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.remove("active");
  carouselItems[nextIndex].classList.add("next");
  setTimeout(function() {
    carouselItems[nextIndex].classList.add("active");
    carouselItems[currentIndex].classList.remove("next");
    currentIndex = nextIndex;
  }, 50);
}

function showPrev() {
  let prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentIndex].classList.remove("active");
  carouselItems[prevIndex].classList.add("prev");
  setTimeout(function() {
    carouselItems[prevIndex].classList.add("active");
    carouselItems[currentIndex].classList.remove("prev");
    currentIndex = prevIndex;
  }, 50);
}

setInterval(showNext, 5000); // show next image every 5 seconds
*/