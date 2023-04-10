$(document).ready(function () {
    $(window).scroll(function () {
        let headerheight = $("header").outerHeight();
        let scrolltop = $(window).scrollTop();
        if (scrolltop > headerheight) {
            $("header").addClass("active")
        }
        else {
            $("header").removeClass("active")
        }
    })

    var $form = jQuery("#contact-form");
    if ($form.length) {
        $form.validate({
            rules: {
                firstname: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                number: {
                    digits: true
                },
                subject: {
                    required: true,
                    
                },
                texareas: {
                    required: true,
                    
                },
                check: {
                    required: true,
                    
                },
            },
            submitHandler: function ($form) {
                var formdata = jQuery("#contact-form").serialize();
                jQuery.ajax({
                    type: "POST",
                    url: "mailer.php",
                    data: formdata,
                    success: function (data) {
                        if (data.success) {
                            $('.msg').html('Thank you for getting in touch with us.').css('color', '#fff');
                            $('#contact-form .submit-btn').prop('disabled', false);

                        } else {
                            $('.msg').html('Error on Sending Message, Please Try Again.').css({ 'color': 'red' });
                        }
                    },
                    error: function (x , y ,z) {
                        $('.msg').html('Something Went Wrong').css({ 'color': 'red' });

                        
                    }
                });
            }
            
        });
    }

})