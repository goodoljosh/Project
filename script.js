function myFunction() {
  document.getElementById("question1").innerHTML = "It depends on what you the music you like to listen to. For example, saxaphones for jazz music, acoustic guitar for country, or electric guitar for rock music.";
}

function myFunction2() {
  document.getElementById("question2").innerHTML = "Please call the number at the bottom of the page for information on avaliable courses.";
}

function myFunction3() {
  document.getElementById("question3").innerHTML = "You really never stop learning and practice makes perfect.";
}

function myFunction4() {
  document.getElementById("question4").innerHTML = "Please go to the bottom of the page to email me directly.";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}