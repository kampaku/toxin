import 'nouislider/dist/nouislider.css';
import './range-slider.scss';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

let rangeSlider = document.querySelector('.range-slider');
let value = document.querySelector('.range-slider__value');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [5000, 10000],
    behaviour: 'drag',
    step: 1000,
    connect: true,
    range: {
      'min': 0,
      'max': 15000
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '₽'
    })
  });
  
  rangeSlider.noUiSlider.on('update', function (values) {
    value.innerHTML = values.join(' - ');
  });
}

export default rangeSlider;