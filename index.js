var showIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

showSlides(showIndex);
setTimeout(showAutoSlide, 4000);

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
//자동으로 슬라이드쇼 진행
function showAutoSlide() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  showIndex++;
  if (showIndex > slides.length) {
    showIndex = 1;
  }
  slides[showIndex - 1].style.display = "block";
  dots[showIndex - 1].className += " active";
  setTimeout(showAutoSlide, 4000);
}
