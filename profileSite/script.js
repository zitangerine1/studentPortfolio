function topFunction() {
 document.documentElement.scrollTop = 0;
}

$("button").click(function() {
 $('html,body').animate({
    scrollTop: $(".personalIntroduction").offset().top},
   'slow');
});