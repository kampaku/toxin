import './dropdown.scss';

class Dropdown {
  constructor(dropdown, dropdownType) {
    this.dropdown = dropdown;
    this.dropdownType = JSON.parse(JSON.stringify(dropdownType));
    this.buttonHandler = this.buttonHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.clear = this.clear.bind(this);
    this.apply = this.apply.bind(this);
    this.init();
  }

  getItem(itemElement) {
    const itemType = itemElement.dataset.type;
    return this.dropdownType.items.find((type) => type.name === itemType);
  }

  buttonHandler(e) {
    const target = e.target.closest('.js-dropdown__item-button');
    if (!target) return;

    this.calculateItem(target);
    const sum = this.itemsAmount();
    this.changeText(sum);
    if (!this.clearButton) return;
    if (sum === 0) {
      this.clearButton.style.visibility = 'hidden';
    } else {
      this.clearButton.style.visibility = 'visible';
    }
  }

  changeText(sum) {
    let newSum = sum;
    const textValue = [];
    const dropdownText = this.dropdown.querySelector('.js-dropdown__input');
    newSum -= this.dropdownType.items.reduce((prev, curr) => {
      if (curr.ignore) {
        return prev + curr.value;
      }
      return prev + 0;
    }, 0);

    const isDeclined = this.dropdownType.wordForms && newSum > 0;

    if (isDeclined) {
      textValue.push(`${newSum} ${this.getDeclension(newSum, this.dropdownType.wordForms)}`);
    }

    this.dropdownType.items.forEach((item) => {
      const isDeclined = item.wordForms && item.value > 0;
      if (isDeclined) {
        textValue.push(`${item.value} ${this.getDeclension(item.value, item.wordForms)}`);
      }
    });

    dropdownText.value = textValue.join(', ');
  }

  calculateItem(target) {
    const itemElement = target.closest('li');
    const itemAmount = itemElement.querySelector('.js-dropdown__item-amount');
    const item = this.getItem(itemElement);

    if (target.dataset.button === 'plus') {
      item.value += 1;
    }

    if (target.dataset.button === 'minus') {
      item.value -= 1;
    }

    itemAmount.textContent = item.value;

    this.checkNegativeValue(itemElement);
  }

  itemsAmount() {
    return this.dropdownType.items.reduce((acc, curr) => curr.value + acc, 0);
  }

  checkNegativeValue(itemElement) {
    const buttonMinus = itemElement.querySelector('[data-button="minus"]');
    const item = this.getItem(itemElement);

    if (item.value === 0) {
      buttonMinus.disabled = 'true';
    } else {
      buttonMinus.disabled = '';
    }
  }

  clear() {
    const itemAmounts = this.list.querySelectorAll('.js-dropdown__item-amount');
    this.dropdownType.items.forEach((item) => (item.value = 0));
    itemAmounts.forEach((amount) => (amount.textContent = 0));
    this.changeText();
    this.listItems.forEach((item) => {
      this.checkNegativeValue(item);
    });
    this.clearButton.style.visibility = 'hidden';
  }

  apply() {
    this.openButton.classList.remove('dropdown__header_active');
    this.list.classList.remove('dropdown__inner_active');
  }

  getDeclension(value, wordForms) {
    const newValue = Math.abs(value) % 100;
    const num = newValue % 10;
    const isThirdForm = newValue > 10 && newValue < 20;
    const isSecondForm = num > 1 && num < 5;
    const isFirstForm = num === 1;

    if (isThirdForm) {
      return wordForms[2];
    }
    if (isSecondForm) {
      return wordForms[1];
    }
    if (isFirstForm) {
      return wordForms[0];
    }
    return wordForms[2];
  }

  render() {
    this.listItems.forEach((item) => {
      const itemAmount = item.querySelector('.js-dropdown__item-amount');
      itemAmount.textContent = this.getItem(item).value;
    });
    const sum = this.itemsAmount();

    if (sum === 0) {
      this.clearButton.style.visibility = 'hidden';
    }
    this.changeText(sum);
  }

  toggle() {
    this.list.classList.toggle('dropdown__inner_active');
    this.openButton.classList.toggle('dropdown__header_active');
  }

  init() {
    this.openButton = this.dropdown.querySelector('.js-dropdown__header');
    this.list = this.dropdown.querySelector('.js-dropdown__inner');
    this.clearButton = this.dropdown.querySelector('.js-dropdown__button-clear');
    this.applyButton = this.dropdown.querySelector('.js-dropdown__button-apply');
    this.listItems = this.list.querySelectorAll('.js-dropdown__item');

    if (this.openButton) {

      this.openButton.addEventListener('click', this.toggle);
    }

    this.render();

    this.listItems.forEach((item) => {
      this.checkNegativeValue(item);
    });

    this.list.addEventListener('click', this.buttonHandler);
    if (this.clearButton && this.applyButton) {
      this.clearButton.addEventListener('click', this.clear);
      this.applyButton.addEventListener('click', this.apply);
    }
  }
}

export default Dropdown;
