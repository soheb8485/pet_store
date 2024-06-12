
(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
            
        }
    });
        // Dropdown on mouse hover
        $(document).ready(function () {
            function toggleNavbarMethod() {
                if ($(window).width() > 992) {
                    $('.navbar .dropdown').on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    }).on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });
                } else {
                    $('.navbar .dropdown').off('mouseover').off('mouseout');
                }
            }
            toggleNavbarMethod();
            $(window).resize(toggleNavbarMethod);
        });
       $(".product-carousel").owlCarousel({
           // autoplay: true,
            smartSpeed: 1000,
            margin: 45,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                    
                }
            }
        });
         // Team carousel
    $(".team-carousel").owlCarousel({
        //autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
     // Testimonials carousel
     $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

// service
$('.service-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    loop: true,
    items:3,
    autoplay:true,
    smartSpeed: 2000,
    navText : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// service end

// second slider
$('.second-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    loop: true,
    items:3,
    autoplay:true,
    dots:false,
    smartSpeed: 2000,
    navText : false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// second slider end

// service page 
// tab section
let totalTabsCount = 0;
  let activeTabIndex = 1;
  let tabChangeTimeout = 6000;

  totalTabsCount = $("#v-pills-tab .nav-link").length;

  function tabChangeHandler() {
    if (activeTabIndex == totalTabsCount) {
      activeTabIndex = 1;
    } else {
      activeTabIndex++;
    }
    $("#v-pills-tab .nav-link")
      .eq(parseInt(activeTabIndex - 1))
      .trigger("click");
  }

let AUTO_CHANGE_TIMER = setInterval(tabChangeHandler, tabChangeTimeout);

// IF PAUSE AUTO CHANGE ON HOVER THEN FOLLOW BELOW CODE
    // $("#v-pills-tab .nav-link").hover(
    //   function () {
    //     clearInterval(AUTO_CHANGE_TIMER);
    //   },
    //   function () {
    //     AUTO_CHANGE_TIMER = setInterval(tabChangeHandler, tabChangeTimeout);
    //   }
    // );
// tab section end
// counter secton
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({end: 3540,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});



  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });
// counter section end
// service page end




// product section
// filter
// Check active classes
var checkClass = function() {
  if ( $('.item').hasClass('hide') ) {
    $('.item').removeClass('hide');
  }
};

// Category filters
$('.all').click( function() {
  checkClass();
});
$('.blue').click( function() {
  checkClass();
  $('.item:not(.blue)').toggleClass('hide');
});
$('.white').click( function() {
  checkClass();
  $('.item:not(.white)').toggleClass('hide');
});
$('.grey').click( function() {
  checkClass();
  $('.item:not(.grey)').toggleClass('hide');
});
$('.yellow').click( function() {
  checkClass();
  $('.item:not(.yellow)').toggleClass('hide');
});
$('.red').click( function() {
  checkClass();
  $('.item:not(.red)').toggleClass('hide');
});


// Active tag
$('.button-filter').click(function(){
  $('.button-filter').removeClass('active');
  $(this).addClass('active');
})
// filter end
// product section end