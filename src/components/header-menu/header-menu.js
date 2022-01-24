import './header-menu.scss';

const submenus = document.querySelectorAll('.js-header-menu__link_expand');

class Submenu {
  constructor(submenus) {
    this.submenus = submenus;
    this.toggle = this.toggle.bind(this);
    this.bindListener();
  }

  toggle(menu) {
    menu.nextElementSibling.classList.toggle('header-menu__submenu_active');
  }

  bindListener() {
    this.submenus.forEach(menu => {
      menu.addEventListener('click', () => this.toggle(menu));
    })
  }
}

new Submenu(submenus);