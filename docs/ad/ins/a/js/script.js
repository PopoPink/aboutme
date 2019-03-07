onFenixReady(function () {
  document.querySelector('#btn').addEventListener('click', function() {
    sendEvent('click_to_site')
  })
})


var slideIndex = 1;
var next =  document.querySelector('.next')
var prev =  document.querySelector('.prev')
showSlides();

prev.onclick = function(){
	plusSlides(-1)
	clearInterval(test);
	
}
next.onclick = function(){
	plusSlides(1)
	clearInterval(test);
	

}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


var test = setInterval(function interval(){ plusSlides(1) }, 3000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 



}
