
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '.breakfast',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    
    //Slider
    $(document).ready(function(){
        $('.slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        });
    });
    
    //    Popup
    $('.show_popup').click(function() {
        var popup_id = $('#' + $(this).attr("rel"));
        $(popup_id).css({'top': $(window).scrollTop() +150}).show();
        $('.overlay_popup').show();
    })
    $('.overlay_popup').click(function() {
        $('.overlay_popup, .popup').hide();
    })
    
    // Form Popup
    // открыть по кнопке
    $('.showForm').click(function() { 
        $('.overForm').fadeIn();
    });

    // закрыть крестиком
    $('.closeForm').click(function() { 
        $('.overForm').fadeOut();
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.popupForm');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.overForm').fadeOut();
        }
    });
	
}());


}
main();



