$(document).ready(function(){
  $(".click-menu").on("click", function(){
    $("nav ul").toggleClass("show-menu");
  });
});
 
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $("nav").addClass('black-menu');
    $("nav").addClass('black-link');
  } else {
     $('nav').removeClass('black-menu');
  }
});

