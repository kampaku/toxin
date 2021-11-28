import './expandable-checkbox-list.scss';

export default class ExpandCheckbox {
  constructor(elem) {
    this.btn = elem.querySelector('.checkbox__wrapper');
    this.list = elem.querySelector('.checkbox-list');
    this.img = elem.querySelector('.checkbox-button');
    this.init();
  }

  init() {
    this.btn.addEventListener('click', () => {
      this.list.classList.toggle('checkbox-list--active');
      this.img.classList.toggle('checkbox-button--active');
    })
  }
}
