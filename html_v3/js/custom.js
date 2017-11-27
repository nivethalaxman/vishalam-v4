$(window).scroll(function() {
  if ($(document).scrollTop() > 125) {
    $('.nav_holder').addClass('shrink');
  } else {
    $('.nav_holder').removeClass('shrink');
  }
});