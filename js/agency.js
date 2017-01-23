/*// Agency Theme JavaScript



(function($) {
    "use strict"; // Start of use strict
 
 $(function() {
   

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
 */

$(function() {
  $('.scroll-down').click (function() {
                           $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
                           return false;
                           });
  });

/*!
 * Start Bootstrap - Agency v3.3.7+1 (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
!function(t){
    "use strict";
    t("a.page-scroll").bind("click",function(a){
                            var o=t(this);
                            t("html, body").stop().animate({
                                                           scrollTop:t(o.attr("href")).offset().top-50},
                                                           1250,"easeInOutExpo"),
                            a.preventDefault()}),t("body").scrollspy({
                                                                     target:".navbar-fixed-top",offset:51}),
    t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("#mainNav").affix({offset:{top:100}})}(jQuery);
