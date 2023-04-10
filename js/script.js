$(document).ready(function(){
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
    // add class on click 
    $('.navbar-nav li a').click(function(){
        $(".navbar-nav li a").removeClass("active");
        $(this).addClass("active");
        
    });
})