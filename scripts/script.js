$(document).ready(function () {
    //plugin make sections full height ang by slides=
    function fullPageInit() {
        if($(window).width() >= 767){
            $('#fullpage').fullpage({
                anchors: ['home', 'principles', 'set', 'composition_sets', 'efficiency'],
                menu: '#myMenu',
                responsiveSlides: true,
                keyboardScrolling: true,
                parallax: true,
                parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
                onLeave: function(index, nextIndex, direction){
                    if(nextIndex !== 1){
                        $("nav").addClass("not-home-page-nav");
                    }else {
                        setTimeout(function () {
                            $("nav").removeClass("not-home-page-nav");
                        },200)
                    }
                    if($(window).width() <= 768){
                        $("nav").removeClass("not-home-page-nav");
                    }

                    if( index === 1 && nextIndex === 2 ) {
                        let isAnimatedOne = $(".principle-container-item");
                        isAnimatedOne.addClass('animated fadeInUp');
                        isAnimatedOne.eq(0).css('animation-delay', '.1s');
                        isAnimatedOne.eq(1).css('animation-delay', '.2s');
                        isAnimatedOne.eq(2).css('animation-delay', '.3s');
                        isAnimatedOne.eq(3).css('animation-delay', '.4s');
                    }
                    else if( ( index === 1 || index === 2 ) && nextIndex === 3 ) {
                        let isAnimatedTwo = $(".subjects-container-item");
                        isAnimatedTwo.addClass('animated fadeIn');
                        isAnimatedTwo.eq(0).css('animation-delay', '.2s');
                        isAnimatedTwo.eq(1).css('animation-delay', '.3s');
                        isAnimatedTwo.eq(2).css('animation-delay', '.4s');
                        isAnimatedTwo.eq(3).css('animation-delay', '.5s');
                        isAnimatedTwo.eq(4).css('animation-delay', '.2s');
                        isAnimatedTwo.eq(5).css('animation-delay', '.3s');
                        isAnimatedTwo.eq(6).css('animation-delay', '.4s');
                        isAnimatedTwo.eq(7).css('animation-delay', '.5s');
                    }
                    else if( ( index === 1 || index === 2 || index === 3 ) && nextIndex === 4 ) {
                        let isAnimatedThree = $(".combination-container");
                        isAnimatedThree.addClass("animated fadeInRight");
                        isAnimatedThree.eq(0).css('animation-delay', '.1s');
                        isAnimatedThree.eq(1).css('animation-delay', '.2s');
                        isAnimatedThree.eq(2).css('animation-delay', '.3s');
                    }
                    else if( ( index === 1 || index === 2 || index === 3 || index === 4 ) && nextIndex === 5 ) {
                        let isAnimatedFour = $(".family-items");
                        isAnimatedFour.addClass("animated fadeIn").css('animation-delay', '.3s');
                    }

                },
                afterResize: function(){
                    if($(window).width() < 1024){
                        $("nav").removeClass("not-home-page-nav");
                        $.fn.fullpage.reBuild();
                    }else{
                        $("nav").addClass("not-home-page-nav");
                        $("#myMenu").fadeIn();
                    }
                    if($(window).width() <= 768){
                        $("nav").removeClass("not-home-page-nav");
                    }
                },
            });

            //on click btn slid to top
            $(".btn-to-top").on('click', function(){
                $.fn.fullpage.moveTo(1);
            });

            $(".logo").on("click",function () {
                $.fn.fullpage.moveTo(1);
            });

        }
    }

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

    fullPageInit();

    $('.box').on("click",function () {
        $(this).next().fadeToggle();
    });

});