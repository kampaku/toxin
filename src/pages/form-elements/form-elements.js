import '~scss/main.scss';

import 'components/logo/logo';
import 'components/about-room/about-room';
import 'components/bullet-list/bullet-list';
import 'components/button/button';
import 'components/checkbox/checkbox';
import 'components/pagination/pagination';
import 'components/radio/radio';
import 'components/toggle/toggle';
import 'components/rating-button/rating-button';
import 'components/subscription-field/subscription-field';
import 'components/review/review';
import 'components/expandable-checkbox-list/init';
import dropdownTypes from 'components/dropdown/dropdown-types';
import DateDropdown from 'components/date-dropdown/DateDropdown';
import Dropdown from 'components/dropdown/Dropdown';
import RangeSlider from 'components/range-slider/RangeSlider';
import InputDateMask from 'components/input-text/InputDateMask';
import ButtonLike from 'components/button-like/ButtonLike';

import './form-elements.scss';

const maskedInput = document.querySelector('.js-input-text__input');
const dropdowns = document.querySelectorAll('.js-dropdown');
const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
const slider = document.querySelector('.js-range-slider');
const buttonsLikeContainer = document.querySelector('.form-elements__button-like');

if (maskedInput) {
  new InputDateMask(maskedInput);
}

if (buttonsLikeContainer) {
  const buttonsLike = buttonsLikeContainer.querySelectorAll('.js-button-like');
  buttonsLike.forEach(button => {
    new ButtonLike(button);
  });
}

if (dateDropdowns) {
  dateDropdowns.forEach(dropdown => {
    new DateDropdown(dropdown);
  });
}

if (dropdowns) {
  dropdowns.forEach(dropdown => {
    new Dropdown(dropdown, dropdownTypes[dropdown.dataset.type]);
  });
}

if (slider) {
  new RangeSlider(slider);
}
