var slides = document.querySelectorAll("#slides > img");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;
setInterval(nextSlide, 10000);

function showSlides(n){
  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
  console.log(current);
}

function prevSlide(){
  if(current == 0)
    current = slides.length;
  current--;
  showSlides(current);
}

function nextSlide(){
  current++;
  if(current == slides.length)
    current = 0;
  showSlides(current);
}