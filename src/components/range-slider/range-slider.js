import noUiSlider from 'nouislider';
import wNumb from 'wNumb';
import 'nouislider/distribute/nouislider.css';

let slider = document.querySelector('.range-slider');
let value = document.querySelector('.range-slider__value');

noUiSlider.create(slider, {
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

slider.noUiSlider.on('update', function (values) {
  value.innerHTML = values.join(' - ');
});

export default slider;