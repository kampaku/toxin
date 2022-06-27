class ExpandableCheckbox {
  constructor(elem) {
    this.elem = elem;
    this.searchElements();
    this.init();
  }

  searchElements = () => {
    this.container = this.elem.querySelector('.js-expandable-checkbox-list__wrapper');
    this.list = this.elem.querySelector('.js-expandable-checkbox-list__items');
    this.img = this.elem.querySelector('.js-expandable-checkbox-list__button-expand');
  }

  toggle = () => {
    this.list.classList.toggle('expandable-checkbox-list__items_active');
    this.img.classList.toggle('expandable-checkbox-list__button-expand_active');
  }

  init = () => {
    this.container.addEventListener('click', this.toggle);
  }
}

export default ExpandableCheckbox;
