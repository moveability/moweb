// Smooth scrolling via animate()
$(document).ready(function(){
  if ($('.g-recaptcha')) {
    checkReCaptcha()
  }

  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Navigation change on scroll
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });

  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});

function onContactCaptcha($form) {
  $('form#contactForm').submit();
}

function checkReCaptcha() {
  if (typeof grecaptcha === "undefined") {
    $('.captcha-error').show();
    setTimeout(checkReCaptcha, 200);
  } else {
    $('.captcha-error').hide();
    $('.g-recaptcha-filler').hide();
    $('.g-recaptcha').attr('disabled', true);
  }
}
