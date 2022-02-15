import 'components/header-menu/init';

import BurgerMenu from './BurgerMenu';

const headers = document.querySelectorAll('.js-header');

headers.forEach(header => {
  new BurgerMenu(header);
})