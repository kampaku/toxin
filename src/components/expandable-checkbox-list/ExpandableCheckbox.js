import './expandable-checkbox-list.scss';

class ExpandableCheckbox {
  constructor(elem) {
    this.container = elem.querySelector('.js-expandable-checkbox-list__wrapper');
    this.list = elem.querySelector('.js-expandable-checkbox-list__items');
    this.img = elem.querySelector('.js-expandable-checkbox-list__button-expand');
    this.toggle = this.toggle.bind(this);
    this.init();
  }

  toggle() {
    this.list.classList.toggle('expandable-checkbox-list__items_active');
    this.img.classList.toggle('expandable-checkbox-list__button-expand_active');
  }

  init() {
    this.container.addEventListener('click', this.toggle);
  }
}

export default ExpandableCheckbox;
