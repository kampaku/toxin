import HeaderMenu from './HeaderMenu';

import './header-menu.scss';

const headerMenus = document.querySelectorAll('.js-header-menu');

headerMenus.forEach(menu => {
  new HeaderMenu(menu);
})