import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import 'nouislider/dist/nouislider.css';

import './range-slider.scss';

const defaultOptions = {
  start: [5000, 10000],
  step: 1000,
  min: 0,
  max: 15000
}

class RangeSlider {
  constructor(element, options= defaultOptions) {
    this.container = element.querySelector('.js-range-slider__container');
    this.options = options;
    this.valueInput = element.querySelector('.js-range-slider__value');
    this.init();
  }

  init() {
    const {start, step, min, max} = this.options;
    noUiSlider.create(this.container, {
      start,
      step,
      range: {
        min,
        max
      },
      behaviour: 'drag',
      connect: true,
      format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: '₽'
      }),
    })

    this.container.noUiSlider.on('update', (values) => {
      this.valueInput.innerHTML = values.join(' - ');
    });
  }
}

export default RangeSlider;