$(function(){
    'use strict';

    new WOW().init();

    var scroll = new SmoothScroll('.navbar a[href*="#"]', {
        speed: 1500
    });

    $("body").niceScroll({
        cursorcolor: "#20d8ea",
        cursorwidth: "8px",
        cursorborder: "1px solid transparent",
        autohidemode: false
    });


    $(window).scroll(function () {
        if($(this).scrollTop() >= 200){
            $('.navbar').css('background-color','rgba(171, 171, 171, 0.97)');
            $('.navbar .navbar-brand img').css('width','45%');
        }else{
            $('.navbar').css('background-color','transparent');
            $('.navbar .navbar-brand img').css('width','unset');
        }

        if($(this).scrollTop() <= $('header').height()){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#home"]').parent().addClass('active');
        }

        if($(this).scrollTop() >= $('header').height()){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#about-us"]').parent().addClass('active');
        }
        if($(this).scrollTop() >= ($('header').height() + $('#about-us').height())){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#app"]').parent().addClass('active');
        }
        if($(this).scrollTop() >= ($('header').height() + $('#about-us').height() + $('#app').height())){
            $('.navbar-nav .nav-item').removeClass('active');
            $('.nav-item a[href="#download"]').parent().addClass('active');
        }
    });

    if(!$('.navbar-collapse').hasClass('show')){
        $('.navbar').css('background-color','transparent');
    }

    $('.navbar-nav .nav-item').click(function(){
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).addClass('active');
    });


    $('section,footer').click(function () {
        $('.collapse.show').slideUp();
    });

    $('.navbar-toggler').click(function (){
        $('.navbar').css('background-color','rgba(171, 171, 171, 0.97)');
    });

    $('.featured-works ul li').on('click', function(){
    $(this).addClass('btn-fill').siblings().removeClass('btn-fill').addClass('btn-stroke');
    if($(this).data('class') === 'all'){
      $('.featured-works .images .item').css('opacity','1');
    }else {
      $('.featured-works .images .item').css('opacity','0.1');
      $($(this).data('class')).parent().css('opacity','1');
    }
    });


    var owl = $('.app .owl-carousel');

    owl.children().each( function( index ) {
        $(this).attr( 'data-position', index );
    });

    $(document).on('click', '.owl-item>div', function() {
        owl.trigger('to.owl.carousel', $(this).data( 'position' ) );
    });

    owl.owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        items:3,
        rtl: true,
        dots: true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:3
            }
        }
    });

});
