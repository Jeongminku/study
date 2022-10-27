var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    autoplay: { /* 1000 = 1초 */
        delay: 1000,
    },
    speed: 800/*800 = 0.8초 */
  });


//   swiper.on('slideChange', function(){
//     console.log('슬라이드가 바뀌었습니다.')
//   });