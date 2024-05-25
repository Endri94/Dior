// 1st swiper

const swiper = new Swiper('.top__swiper', {
  // Optional parameters
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 2nd swiper
const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// accordion

document.querySelectorAll('.accordion__trigger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordion__item--active')
  })
});
