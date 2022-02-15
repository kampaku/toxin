import InputDateMask from './InputDateMask';

const masks = document.querySelectorAll('.js-input-text__input');

if (masks) {
  masks.forEach(mask => {
    new InputDateMask(mask);
  });
}