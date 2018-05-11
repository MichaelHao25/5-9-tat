$('.header .search-box .close, .header .default .search').on('click', function () {
    $(this).parents('.wrap').toggleClass('active');
})

var mySwiper = new Swiper('.banner .swiper-container', {
    loop: true,
    autoplay: 3000,
    pagination: '.banner .swiper-pagination',
})
var mySwiper = new Swiper('.hot .swiper-container', {
    loop: true,
    autoplay: 3000,
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
$('.all-product .item').on('click',function() {
    $(this).toggleClass('arrow-toggle')
    $(this).next('.por').siblings('.por').children('.child-content').removeClass('active')
    // $('.all-product .child-content').removeClass('active');
    $(this).prevAll('.item').addClass('active');
    $(this).addClass('active').nextAll().removeClass('active');
    $(this).next('.por').addClass('active');
    $(this).next('.por').children('.child-content').toggleClass('active');
})

$('.all-product-target').on('click',function() {

    if($('.all-product').toggleClass('active').hasClass('active')){
        $('body').addClass('all-product-hide-main-footer');
    }else{
        $('body').removeClass('all-product-hide-main-footer');
    }
})
// $('.all-product .ovh').on('click',function() {
//     $(this).siblings().addClass('active');
// })