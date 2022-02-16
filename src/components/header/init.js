import 'components/header-menu/init';
import 'components/button/button';

import BurgerMenu from './BurgerMenu';
import './header.scss';

const headers = document.querySelectorAll('.js-header');

headers.forEach(header => {
  new BurgerMenu(header);
})