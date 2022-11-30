var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    zoom: true,
    zoom: {
      maxRatio: 1.5,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  });

  function toggleMenu(){
      const menuToggle = document.querySelector('.toggle');
      const navigation = document.querySelector('.navigation');
      menuToggle.classList.toggle('active')
      navigation.classList.toggle('active')
  }