class BurgerMenu {
  constructor(container) {
    this.container = container;
    this.menuIsActive = false;
    this.searchElements();
    this.bindListener();
  }

  searchElements = () => {
    this.button = this.container.querySelector('.js-header__burger');
    this.menu = this.container.querySelector('.js-header__navigation-list');
  }

  handleBurgerMenuClick = () => {
    if (this.menuIsActive) {
      document.body.classList.remove('overflow-hidden');
      this.menuIsActive = !this.menuIsActive;
    } else {
      document.body.classList.add('overflow-hidden');
      this.menuIsActive = !this.menuIsActive;
    }
    this.button.classList.toggle('header__burger_active');
    this.menu.classList.toggle('header__navigation-list_active');
  }

  bindListener = () => {
    this.button.addEventListener('click', this.handleBurgerMenuClick);
  }
}

export default BurgerMenu;
