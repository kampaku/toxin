import './expandable-checkbox-list.scss';

export default class ExpandCheckbox {
  constructor(elem) {
    this.btn = elem.querySelector('.js-expandable-checkbox__wrapper');
    this.list = elem.querySelector('.js-expandable-checkbox__items');
    this.img = elem.querySelector('.js-expandable-checkbox__button');
    this.init();
  }

  init() {
    this.btn.addEventListener('click', () => {
      this.list.classList.toggle('expandable-checkbox__items--active');
      this.img.classList.toggle('expandable-checkbox__button--active');
    })
  }
}
