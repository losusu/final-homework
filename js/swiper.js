window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环
        //自动播放
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        // 分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }) 
}