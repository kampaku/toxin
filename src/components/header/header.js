import 'components/button/button';
import 'components/header-menu/header-menu'

import './header.scss';

const header = document.querySelector('.js-header');

class BurgerMenu {
  constructor(element) {
    this.button = element.querySelector('.js-header__burger');
    this.menu = element.querySelector('.js-header__navigation-list');
    this.menuIsActive = false;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.bindListener();
  }

  toggleMenu() {
    if (this.menuIsActive) {
      document.body.style.overflow = 'visible';
      this.menuIsActive = !this.menuIsActive;
    } else {
      document.body.style.overflow = 'hidden';
      this.menuIsActive = !this.menuIsActive;
    }
    this.button.classList.toggle('header__burger_active');
    this.menu.classList.toggle('header__navigation-list_active');
  }

  bindListener() {
    this.button.addEventListener('click', this.toggleMenu);
  }
}

new BurgerMenu(header);
