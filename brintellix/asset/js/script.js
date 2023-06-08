$(document).ready(function(){
// owl owlCarousel 

    $('.carousel-body.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots:false,
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
    // burgger

    $('#nav-burger').click(function(){
        $(this).toggleClass('open');
        $(".collapse:not(.show)").toggleClass("active");
    });

    // tabs 

    $(".tab1_body").hide();
    $(".tab1_body.activetab").show();
    $('#tabz li a').click(function(){
        $(".tab1_body").hide();
        $(".tab1_body").removeClass("activetab");
        $('#tabz li a').removeClass('active');
        var t =  $(this).attr("target");
        var find_ent = $(this).parents(".tab-sec-wrap");
        find_ent.find("#" + t).show();
        var tab = find_ent.find("#" + t);
        tab.addClass("activetab");
        $(".tab1_body.activetab").show();
        $(this).addClass('active');
    });
    // class added on scroll 
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0){
            $("header").addClass('active');
        }
        else{
            $("header").removeClass('active');
        }
    })
    // add class to navbar 
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    })
    $(".tab_class li a").click(function(){
        $(this).each(function(){
            var target = $(this).attr("target");
            if(target == 'tab2'){
            
                $(".pooled").addClass("active");
            }
            else{
                $(".pooled").removeClass("active");
            }
        })
        
    })
    // redirecting to different pages 
    $('.feel-body li:first-child').click(function(){
        window.location.href = "feel.html";
    })
    $('.feel-body li:nth-child(2').click(function(){
        window.location.href = "achieve.html";
    })
    $('.feel-body li:nth-child(3').click(function(){
        window.location.href = "forward.html";
    })
    $('.feel-body li:nth-child(4').click(function(){
        window.location.href = "focus.html";
    })
    $('.feel-body li:nth-child(5').click(function(){
        window.location.href = "maintain.html";
    })
    $('.feel-body li:nth-child(6').click(function(){
        window.location.href = "live.html";
    })
    // popup modal on load
    $('#site-load').modal('show');
    
    // popup toggle switch 
    let checks = $(".checks");
    $(checks).each(function(){
        let attrChecked = $(checks).attr("checked");
        if(attrChecked){
            $(this).parent().addClass("active")
        }
        else{
            $(this).parent().removeClass("active")
        }
    })
    $(".switch input").click(function(){
        $(this).parent().toggleClass("active");
    })
       // when click on see more -- 
    $(".show-details").click(function(){
        $(".popup-tabel").toggleClass("active");
        if($(".popup-table").hasClass("active")){
        }
        else{
            $(this).children().toggleClass("active");
        }
    })
    // external ramp link fires on click 
    $(".outer-link").click(function(e){
        e.preventDefault();
        $("#external-ramp").modal('show');
    })
    $(".no-exit , .accept-cookies").click(function(ev){
        ev.preventDefault();
        $(this).parents(".modal").removeClass("show").css("display","none");
        let bodys = $(this).parents(".home-body");
        $(bodys).css("padding", "0");
        $(bodys).css("overflow","auto");
        $(bodys).find(".modal-backdrop").removeClass("show");
        $(bodys).find(".modal-backdrop").removeClass("modal-backdrop");
    })
    // carousel btn click 
    $('.pop1').click(function(){
        $('.carousel-body.owl-carousel').trigger('to.owl.carousel',0);
    })
    $('.pop2').click(function(){
        $('.carousel-body.owl-carousel').trigger('to.owl.carousel',1);
    })
    $('.pop3').click(function(){
        $('.carousel-body.owl-carousel').trigger('to.owl.carousel',2);
    })
    // scroll to sections on click nav menu 
    $('.ref').click(function(e) {
        e.preventDefault();  
        var targetSection = $($(this).attr('href'));  
        var offset = targetSection.offset().top; 
        var headerHeight = $('header').outerHeight() + 24;
        var  totalOffset = offset - headerHeight;
        $('html, body').animate({
        scrollTop: totalOffset 
        }, 800); 
        var windowWidth = $(window).width();
        if(windowWidth < 992){
            $('#nav-burger').trigger("click");
        }
    });
})