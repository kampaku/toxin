import HeaderMenu from './HeaderMenu';

const headerMenus = document.querySelectorAll('.js-header-menu');

headerMenus.forEach(menu => {
  new HeaderMenu(menu);
})