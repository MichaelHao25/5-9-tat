$('.header .search-box .close, .header .default .search').on('click',function() {
    $(this).parents('.wrap').toggleClass('active');
})

var mySwiper = new Swiper ('.banner .swiper-container', {
    loop: true,
    autoplay:3000,
    pagination: '.banner .swiper-pagination',
  })  
  var mySwiper = new Swiper ('.child-menu .swiper-container', {
    slidesPerView : 2.5,
    slidesPerColumn : 2,
    slidesPerColumnFill : 'row',
    })  