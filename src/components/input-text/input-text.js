import IMask from 'imask';

import './input-text.scss';

class InputDateMask {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    IMask(
      this.element,
      {
        mask: Date,
        overwrite: true,
        autofix: true,
        blocks: {
          d: {mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2},
          m: {mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2},
          Y: {mask: IMask.MaskedRange, placeholderChar: 'y', from: 1900, to: 2010, maxLength: 4}
        }
      }
    )
  }
}

export default InputDateMask;