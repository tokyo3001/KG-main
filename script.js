$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

// Disable right-click on images
$(document).ready(function () {
  $("img").on("contextmenu", function () {
    return false;
  });
});

// Disable right-click on webpage
$(document).bind("contextmenu", function (e) {
  return false;
});

function contact() {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLScp_vfkH_VeeGdA9sdlnccCYX8j22J9vwHvgJsTzi5lu2LlsQ/viewform?usp=pp_url", "_blank");
}