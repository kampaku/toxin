import './expandable-checkbox-list.scss';

export default class ExpandableCheckbox {
  constructor(elem) {
    this.container = elem.querySelector('.js-expandable-checkbox-list__wrapper');
    this.list = elem.querySelector('.js-expandable-checkbox-list__items');
    this.img = elem.querySelector('.js-expandable-checkbox-list__button-expand');
    this.init();
  }

  init() {
    this.container.addEventListener('click', () => {
      this.list.classList.toggle('expandable-checkbox-list__items_active');
      this.img.classList.toggle('expandable-checkbox-list__button-expand_active');
    })
  }
}
