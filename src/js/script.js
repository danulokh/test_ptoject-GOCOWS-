const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
      }
});
const hamburger = document.querySelector('.hamburger')
      menu = document.querySelector('.header-nav__list')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger_active');
  menu.classList.toggle('header-nav__list_active')
});