var showIndex = 1;
showSlides(showIndex);

//슬라이드 방향 값을 가져와서 실행
function plusSlides(n) {
  showSlides((showIndex += n));
}
//점을 클릭시 해당 값을 가져와서 실행
function currentSlide(n) {
  showSlides((showIndex = n));
}

//일정한 값을 받을면 그에 대한 동작을 해주는 함수
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    showIndex = 1;
  }
  if (n < 1) {
    showIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[showIndex - 1].style.display = "block";
  dots[showIndex - 1].className += " active";
}
