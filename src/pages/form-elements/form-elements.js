import '~scss/main.scss';

import 'components/logo/logo';
import 'components/about-room/about-room';
import 'components/bullet-list/bullet-list';
import 'components/button/button';
import 'components/checkbox/checkbox';
import 'components/button-like/ButtonLike';
import 'components/pagination/pagination';
import 'components/radio/radio';
import 'components/toggle/toggle';
import 'components/rating-button/rating-button';
import 'components/subscription-field/subscription-field';
import 'components/review/review';
import ExpandCheckbox from 'components/expandable-checkbox-list/ExpandableCheckbox';
import dropdownTypes from 'components/dropdown/dropdown-types';
import DateDropdown from 'components/date-dropdown/DateDropdown';
import Dropdown from 'components/dropdown/Dropdown';
import RangeSlider from 'components/range-slider/RangeSlider';
import InputDateMask from 'components/input-text/input-text';

import './form-elements.scss';
import ButtonLike from '../../components/button-like/ButtonLike';

const maskedInput = document.querySelector('.js-input-text__input');
const checkboxLists = document.querySelectorAll('.js-expandable-checkbox-list');
const dropdowns = document.querySelectorAll('.js-dropdown');
const dateDropdowns = document.querySelectorAll('.js-date-dropdown');
const slider = document.querySelector('.js-range-slider');
const buttonsLike = document.querySelectorAll('.js-button-like');

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

if (maskedInput) {
  new InputDateMask(maskedInput);
}

if (checkboxLists) {
  checkboxLists.forEach(checkbox => {
    new ExpandCheckbox(checkbox);
  });
}
if (buttonsLike) {
  buttonsLike.forEach(button => {
    new ButtonLike(button);
  })
}

if (slider) {
  new RangeSlider(slider);
}