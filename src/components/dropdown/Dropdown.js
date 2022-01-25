import './dropdown.scss';

function getDeclension(n, wordForms) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return wordForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return wordForms[1];
  }
  if (n1 === 1) {
    return wordForms[0];
  }
  return wordForms[2];
}

class Dropdown {
  constructor(dropdown, dropdownType) {
    this.dropdown = dropdown;
    this.dropdownType = dropdownType;
    this.buttonHandler = this.buttonHandler.bind(this);
    this.clear = this.clear.bind(this);
    this.apply = this.apply.bind(this);
    this.init();
  }

  getItem(itemElement) {
    const itemType = itemElement.dataset.type;
    let item = this.dropdownType.items.find((type) => type.name === itemType);
    return item;
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
    let textValue = [];
    const dropdownText = this.dropdown.querySelector('.js-dropdown__text');
    sum -= this.dropdownType.items.reduce((prev, curr) => {
      if (curr.ignore) {
        return prev + curr.value;
      }
      return prev + 0;
    }, 0);
    if (this.dropdownType.wordForms && sum > 0) {
      textValue.push(`${sum} ${getDeclension(sum, this.dropdownType.wordForms)}`);
    }

    this.dropdownType.items.forEach((item) => {
      if (item.wordForms && item.value > 0) {
        textValue.push(`${item.value} ${getDeclension(item.value, item.wordForms)}`);
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
    const btnMinus = itemElement.querySelector('.js-dropdown__item-button_icon_minus');
    const item = this.getItem(itemElement);

    if (item.value === 0) {
      btnMinus.disabled = 'true';
    } else {
      btnMinus.disabled = '';
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
    this.list.classList.remove('dropdown__inner_active');
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

  init() {
    this.openBtn = this.dropdown.querySelector('.js-dropdown__header');
    this.list = this.dropdown.querySelector('.js-dropdown__inner');
    this.clearButton = this.dropdown.querySelector('.js-dropdown__button-clear');
    this.applyButton = this.dropdown.querySelector('.js-dropdown__button-apply');
    this.listItems = this.list.querySelectorAll('.js-dropdown__item');

    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => {
        this.list.classList.toggle('dropdown__inner_active');
        this.openBtn.classList.toggle('dropdown__header_active');
      });
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

export { Dropdown };
