$('.header .search-box .close, .header .default .search').on('click', function () {
    $(this).parents('.wrap').toggleClass('active');
})

$('.layout-gotop').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
})
$(window).on('scroll', function (e) {
    (function () {
        var top = $(window).scrollTop(),
            height = window.innerHeight;
        if (top >= height) {
            $('.layout-gotop').addClass('active');
        } else {
            $('.layout-gotop').removeClass('active');
        }
    })()


    // goto 33 line nav
    if (parseInt($('.all-product-target').attr('data-disabled'))) {
        var i_nav_pre_value = parseInt($('.js-fix-header').attr('data-scroll-top')),
            i_scrolltop = $(window).scrollTop();
        console.log(i_scrolltop);
        if (i_nav_pre_value > i_scrolltop) {
            i_nav_pre_value = i_scrolltop
            $('.js-fix-header').attr('data-scroll-top', i_nav_pre_value)
            $('.js-fix-header').removeClass('active');
        } else {
            i_nav_pre_value = i_scrolltop;
            $('.js-fix-header').attr('data-scroll-top', i_nav_pre_value)
            $('.js-fix-header').addClass('active');
        }
    }
})
$('.js-fix-header').attr('data-scroll-top', 0)

$('.all-product .item').on('click', function () {
    $(this).toggleClass('arrow-toggle');
    $(this).next('.por').slideToggle().siblings('.por').slideUp();
    // $(this).next('.por').siblings('.por').children('.child-content').removeClass('active')
    // $('.all-product .child-content').removeClass('active');
    // $(this).prevAll('.item').addClass('active');
    // $(this).addClass('active').nextAll().removeClass('active');
    // $(this).next('.por').addClass('active');
    // $(this).next('.por').children('.child-content').toggleClass('active');
})

$('.all-product-target').attr('data-disabled', 1)
$('.all-product-target').on('click', function () {
    $(this).attr('data-disabled', 0)
    $(this).children('.menu').toggleClass('active');
    if (this.b_switch) {
        this.b_switch = 0
        $('body').toggleClass('all-product-hide-main-footer');
        $(window).scrollTop(this.i_window_scrolltop)
        $('.all-product').slideToggle(300,function() {
            $('.all-product-target').attr('data-disabled',1)
        });
    } else {
        this.b_switch = 1
        this.i_window_scrolltop = $(window).scrollTop();
        $('.all-product').slideToggle(300, function () {
            $('body').toggleClass('all-product-hide-main-footer');
            $(window).scrollTop(0);
        });
    }
    // if($('.all-product').toggleClass('active').hasClass('active')){
    // $('body').toggleClass('all-product-hide-main-footer');
    // }else{
    // $('body').removeClass('all-product-hide-main-footer');
    // }
})
// $('.all-product .ovh').on('click',function() {
//     $(this).siblings().addClass('active');
// })


$('.public-number-select-plug').on('click', function (e) {
    var value = parseInt($(this).children('.value').val());
    $(e.target).hasClass('add') && value++;
    $(e.target).hasClass('min') && value--;
    value < 1 && (value = 1);
    $(this).children('.value').val(value)
})

$('.main .vip-center-my-account .order.more-info').on('click', function () {
    $(this).toggleClass('active').siblings('.order-details-info').slideToggle();
})


$('.main .login-register .container .tabs-control .top a').on('click', function () {
    if ($(this).hasClass('js-login')) {
        $('.js-container').removeClass('active')
        $('.main .login-register .container .tabs-control .bar span').css('left', '0%');
        $('.js-container').height($('.js-container .js-wrapper .js-login').height())
    }
    if ($(this).hasClass('js-join')) {
        $('.js-container').addClass('active')
        $('.main .login-register .container .tabs-control .bar span').css('left', '50%');
        $('.js-container').height($('.js-container .js-wrapper .js-join').height())
    }
    //     js-login
    // js-join
})

$('.main .login-register .container .form .radio-container .item').on('click', function () {
    if ($(this).hasClass('new')) {
        $('.js-child-container').addClass('active')
    } else {
        $('.js-child-container').removeClass('active')
    }
    //     js-login
    // js-join
})

$('.main .shop-car-container .shop-car-product-info .delete').on('click', function () {
    $(this).parents('.shop-car-product-info').remove();
})


$('.main .shop-car-container .shop-car-product-list-title').on('click', function () {
    $(this).toggleClass('active');
    $('.main .shop-car-container .shop-car-product-list').slideToggle();
})
$('.main .about-us-container .issue .title').on('click', function () {
    $(this).toggleClass('active').siblings('.content').slideToggle();
})



$('.main .information-container .list .item').on('click', function() {
    var url = $(this).attr('data-src');
    $('.information-container .map iframe').attr('src', url);
});

document.querySelectorAll('.banner .swiper-container').length>0&& new Swiper('.banner .swiper-container', {
    loop: true,
    autoplay: 3000,
    pagination: '.banner .swiper-pagination',
})
document.querySelectorAll('.hot .swiper-container').length>0&& new Swiper('.hot .swiper-container', {
    autoplay: 3000,
    slidesPerView: 2.5,
})

document.querySelectorAll('.new-sms .swiper-container').length>0&& new Swiper('.new-sms .swiper-container', {
    loop: true,
    // autoplay: 3000,
    pagination: '.new-sms .swiper-pagination',
})
document.querySelectorAll('.sale .swiper-container').length>0&& new Swiper('.sale .swiper-container', {
    loop: true,
    // autoplay: 3000,
    pagination: '.sale .swiper-pagination',
})
document.querySelectorAll('.child-menu .swiper-container').length>0&& new Swiper('.child-menu .swiper-container', {
    slidesPerView: 2.5,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
})
document.querySelectorAll('.vip-center-my-account .swiper-container').length>0&& new Swiper('.vip-center-my-account .swiper-container', {
    slidesPerView: 'auto',
})
document.querySelectorAll('.product-list-type .swiper-container').length>0&& new Swiper('.product-list-type .swiper-container', {
    slidesPerView: 'auto',
    onInit: function (swiper) {
        swiper.slideTo(parseInt(swiper.container[0].getAttribute('data-init-index')), 1000, false);
    }
})