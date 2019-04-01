jQuery(function ($) {

    'use strict';
	

new WOW().init();


jQuery(window).bind('load', function () {
	parallaxInit();						  
});
function parallaxInit() {
    jQuery('.parallax').each(function(){
        jQuery(this).parallax("30%", 0.1);
    });
}




$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -40
        }, 1000);
        return false;
      }
    }
  });
});


});