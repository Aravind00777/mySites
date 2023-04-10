$(document).ready(function(){

    $('.trusted-wrap .owl-carousel').owlCarousel({
        loop:true,
        margin:90,
        nav: true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
    
    $('#nav-burger').click(function(){
        $(this).toggleClass('open');
        $(".collapse:not(.show)").toggleClass("active");

        // for removing scroll on burger
        if($('#nav-burger').hasClass("open")){
            $("body").addClass("fixed");
        }
        else{
            $("body").removeClass("fixed");
        }
    });
    $(window).scroll(function(){
        var scrolltop = $(this).scrollTop();
        var headerheight = $(".header").outerHeight();
        if(scrolltop > headerheight){
            $(".header").addClass("active");
        }
        else{
            $(".header").removeClass("active");
        }
    });
   
    
        
    
})