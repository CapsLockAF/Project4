// viewportChecker
$(document).ready(function(){
    $('.left_box, .left_coll .service_item').addClass("hidden_1").viewportChecker({
        classToAdd: 'visible_1 animated fadeInLeft',
    });
    $('.right_box, .right_coll .service_item').addClass("hidden_1").viewportChecker({
        classToAdd: 'visible_1 animated fadeInRight',
    });
    $('.services_desc, .projects_desc, .team_desc').addClass("hidden_1").viewportChecker({
        classToAdd: 'visible_1 animated flipInX',
    });
// own-carusel
    $('.home_slider__imgBox').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navContainer:'.home_nav',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        fluidSpeed:250,
        autoplaySpeed:1000,
        navSpeed:1000,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false
            },
            600:{
                items:1,
                nav:false,
                dots:false
            },
            768:{
                items:2,
                nav:true
            },
            1000:{
                items:2,
                nav:true
            }
        }
    });
    $('.team_box').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        navSpeed:1000,
        fluidSpeed:250,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots:true
            },
            600:{
                items:1,
                nav:true,
                dots:false
            },
            768:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // Add smooth scrolling to all links
    $(".nav_menu a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Go to top"><i class="fas fa-angle-up"></i></a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});
// button to top
$(function() {
    $("#go-top").scrollToTop();
});
