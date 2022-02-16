import InputDateMask from './InputDateMask';
import './input-text.scss';

const masks = document.querySelectorAll('.js-input-text__input');

if (masks) {
  masks.forEach(mask => {
    new InputDateMask(mask);
  });
}