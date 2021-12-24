import './button-like.scss';

export default class ButtonLike {
  constructor(element) {
    this.button = element;
    this.buttonHandler = this.buttonHandler.bind(this);
    this.bindListener();
  }

  bindListener() {
    this.button.addEventListener('click', this.buttonHandler);
  }

  buttonHandler() {
    const value = Number(this.button.textContent);
    if (this.button.classList.contains('button-like_active')) {
      this.button.textContent = value - 1;
      this.button.classList.remove('button-like_active');
      return;
    }
    this.button.classList.add('button-like_active');
    this.button.textContent = value + 1;
  }
}