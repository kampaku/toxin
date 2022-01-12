import 'components/button/button';
import 'components/header-menu/header-menu'

import './header.scss';

const header = document.querySelector('.js-header');

function burgerMenu() {
  if(!header) return;
  const burgerBtn = header.querySelector('.js-header__burger');
  const menu = header.querySelector('.js-header__navigation-list');
  let menuIsActive = false;

  burgerBtn.addEventListener('click', () => {
    if (menuIsActive) {
      document.body.style.overflow = 'visible';
      menuIsActive = !menuIsActive;
    } else {
      document.body.style.overflow = 'hidden';
      menuIsActive = !menuIsActive;
    }
    burgerBtn.classList.toggle('header__burger_active');
    menu.classList.toggle('header__navigation-list_active');
  })
}

burgerMenu();
