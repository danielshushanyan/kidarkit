$(document).ready(function () {
    //plugin make sections full height ang by slides=


    //onclick go to section work only in mobile
    $("#myMenu > li").on("click",function () {
        if($(window).width() < 768){
            let id = $(this).data("anchor");
            $('html, body').animate({
                scrollTop: $("#"+id).offset().top
            }, 1000);
        }
    });

    //scroll to top
    $(".btn-to-top").on("click",function () {
        if($(window).width() < 768){
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        }
    });

    //toggle burger bar
    $(".bar1,.bar2,.bar3").on("click" ,function () {
        if($(window).width() < 1024){
            $(this).toggleClass("change");
            $("#myMenu").fadeToggle();
        }
    });

    $('#myMenu > li > a').on("click", function () {
        if($(window).width() < 1024){
            $(".container-burger").removeClass("change");
            $("#myMenu").fadeOut();
        }
    });



    $('.box').on("click",function () {
        $(this).next().fadeToggle();
    });

});