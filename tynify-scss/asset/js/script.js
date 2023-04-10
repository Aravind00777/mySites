$(document).ready(function(){

    $('.beyond-content-body.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
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
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
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
    });
    $('#nav-burger').click(function(){
        $(this).toggleClass('open');
        $(".collapse:not(.show)").toggleClass("active");
    });
    $(".cross").click(function(){
        $("#nav-burger").removeClass("open");
        $(".collapse").removeClass("active");
    })
    $(window).scroll(function(){
        var scrolltop = $(this).scrollTop();
        // var headeroffset = $(".header").offset().top;
        var headerheight = $(".header").outerHeight();
        if(scrolltop > headerheight){
            $(".header").addClass("active");
        }
        else{
            $(".header").removeClass("active");
        }
    });
})