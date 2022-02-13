import './header-menu.scss';

class HeaderMenu {
  constructor(element) {
    this.headerMenu = element;
    this.expandMenus = element.querySelectorAll('.js-header-menu__link_expand');
    this.expand = false;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.closeListener = this.closeListener.bind(this);
    this.bindListener();
  }

  closeAll() {
    this.expandMenus.forEach(menu => {
      menu.nextElementSibling.classList.remove('header-menu__submenu_active');
    });
    document.removeEventListener('click', this.closeListener);
  }

  closeListener({ target }) {
    if (target.matches('.js-header-menu__link_expand')) return;
    this.closeAll();
  }

  toggleMenu({ target }) {
    if (!target.matches('.js-header-menu__link_expand')) return;
    const submenu = target.nextElementSibling;
    if (submenu.classList.contains('header-menu__submenu_active')) {
      target.nextElementSibling.classList.remove('header-menu__submenu_active');
    } else {
      this.closeAll();
      target.nextElementSibling.classList.add('header-menu__submenu_active');
      document.addEventListener('click', this.closeListener);
    }
  }

  bindListener() {
    this.headerMenu.addEventListener('click', this.toggleMenu);
  }
}

export default HeaderMenu;