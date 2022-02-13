import BurgerMenu from './BurgerMenu';

const header = document.querySelectorAll('.js-header');

header.forEach(header => {
  new BurgerMenu(header);
})