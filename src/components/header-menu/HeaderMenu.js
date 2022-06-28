class HeaderMenu {
  constructor(element) {
    this.element = element;
    this.headerMenu = element;
    this.expand = false;
    this.searchElements();
    this.bindListener();
  }

  searchElements = () => {
    this.expandMenus = this.element.querySelectorAll('.js-header-menu__link_expand');
  }

  closeAll = () => {
    this.expandMenus.forEach(menu => {
      menu.nextElementSibling.classList.remove('header-menu__submenu_active');
    });
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = ({ target }) => {
    if (target.matches('.js-header-menu__link_expand')) return;
    this.closeAll();
  }

  handleMenuClick = ({ target }) => {
    if (!target.matches('.js-header-menu__link_expand')) return;
    const submenu = target.nextElementSibling;
    if (submenu.classList.contains('header-menu__submenu_active')) {
      target.nextElementSibling.classList.remove('header-menu__submenu_active');
    } else {
      this.closeAll();
      target.nextElementSibling.classList.add('header-menu__submenu_active');
      document.addEventListener('click', this.handleDocumentClick);
    }
  }

  bindListener = () => {
    this.headerMenu.addEventListener('click', this.handleMenuClick);
  }
}

export default HeaderMenu;
