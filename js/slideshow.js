let slides = document.querySelectorAll('.slideshow .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);
let next = document.getElementById('next');
let previous = document.getElementById('previous');

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length)%slides.length;
  slides[currentSlide].className = 'slide show';
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

next.onclick = function() {
  nextSlide();
}

previous.onclick = function() {
  previousSlide();
}
