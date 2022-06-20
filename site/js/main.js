const swiper = new Swiper('.swiper', {
  
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })


  const swiperPrev = document.getElementById('swiperPrev')
  const swiperNext = document.getElementById('swiperNext')
  
  swiperPrev.addEventListener('click', () => {
    mySwiper.slidePrev();
  })
  swiperNext.addEventListener('click', () => {
    mySwiper.slideNext();
  });