mybutton = document.getElementById("toTopButton");
window.onscroll = function() {scrollFunction()};

destination = document.getElementsByClassName("personalIntroduction")
console.log(destination)

function toIntro() {
 destination.scrollIntoView();
 console.log('Function has executed')
}

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
 } else {
  mybutton.style.display = "none";
 }
}

function topFunction() {
 document.documentElement.scrollTop = 0;
}