$(document).ready(function(){

    $(window).on("scroll", function(){
        var scroll = $(this).scrollTop();

        $(".par").css({
            transform: 'scale('+(1+(scroll/2000))+')'
        });

        $(".top").css({
            transform: 'translateY('+(scroll*1.25)+'px) translateX(-50%)'
        });

        $(".middle").css({
            transform: 'translateY('+(scroll/3)+'px)'
        });


        $(".bottom").css({
            transform: 'translateY('+(scroll/6)+'px)'
        })
    })
 
});