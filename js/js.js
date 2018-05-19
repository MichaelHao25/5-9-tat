$('.header .search-box .close, .header .default .search').on('click', function () {
    $(this).parents('.wrap').toggleClass('active');
})

$('.layout-gotop').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
})
$(window).on('scroll', function () {
    var top = $(window).scrollTop(),
        height = window.innerHeight;
    if (top >= height) {
        $('.layout-gotop').addClass('active');
    } else {
        $('.layout-gotop').removeClass('active');
    }
})
$('.all-product .item').on('click', function () {
    $(this).toggleClass('arrow-toggle');
    $(this).next('.por').slideToggle();
    // $(this).next('.por').siblings('.por').children('.child-content').removeClass('active')
    // $('.all-product .child-content').removeClass('active');
    // $(this).prevAll('.item').addClass('active');
    // $(this).addClass('active').nextAll().removeClass('active');
    // $(this).next('.por').addClass('active');
    // $(this).next('.por').children('.child-content').toggleClass('active');
})

$('.all-product-target').on('click', function () {
    $(this).children('.menu').toggleClass('active');
    if (this.a) {
        this.a = 0
        $('body').toggleClass('all-product-hide-main-footer');
        $('.all-product').slideToggle(300);
    } else {
        this.a = 1
        $('.all-product').slideToggle(300, function () {
            $('body').toggleClass('all-product-hide-main-footer');
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






var mySwiper = new Swiper('.banner .swiper-container', {
    loop: true,
    autoplay: 3000,
    pagination: '.banner .swiper-pagination',
})
var mySwiper = new Swiper('.hot .swiper-container', {
    autoplay: 3000,
    slidesPerView: 2.5,
})

var mySwiper = new Swiper('.new-sms .swiper-container', {
    loop: true,
    // autoplay: 3000,
    pagination: '.new-sms .swiper-pagination',
})
var mySwiper = new Swiper('.sale .swiper-container', {
    loop: true,
    // autoplay: 3000,
    pagination: '.sale .swiper-pagination',
})
var mySwiper = new Swiper('.child-menu .swiper-container', {
    slidesPerView: 2.5,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
})
var mySwiper = new Swiper('.vip-center-my-account .swiper-container', {
    slidesPerView: 'auto',
})
var mySwiper = new Swiper('.product-list-type .swiper-container', {
    slidesPerView: 'auto',
    onInit: function (swiper) {
        swiper.slideTo(parseInt(swiper.container[0].getAttribute('data-init-index')), 1000, false);
    }
})