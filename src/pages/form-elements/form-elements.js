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
import RangeSlider from 'components/range-slider/range-slider';
import InputDateMask from 'components/input-text/input-text';

import './form-elements.scss';

const maskedInput = document.querySelector('.js-input-text__input');
const expandCheckbox = document.querySelector('.js-expand-box');
const expandCheckboxExpanded = document.querySelector('.js-expand-box-expanded');
const dropdownGuestElement = document.querySelector('.js-guest');
const dropdownGuestExpandedElement = document.querySelector('.js-guest-expanded');
const dropdownZeroGuestElement = document.querySelector('.js-zero-guest-expanded');
const dropdownComfortElement = document.querySelector('.js-comfort');
const dropdownComfortElementExpanded = document.querySelector('.js-comfort-expanded');
const doubleDate = document.querySelector('.js-double-date');
const filterDate = document.querySelector('.js-filter-date');
const slider = document.querySelector('.js-range-slider');

const { rooms, guests, zeroGuests } = dropdownTypes;

if (doubleDate) {
  new DateDropdown(doubleDate);
}

if (filterDate) {
  new DateDropdown(filterDate);
}

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, zeroGuests);
}

if (dropdownGuestExpandedElement) {
  new Dropdown(dropdownGuestExpandedElement, guests);
}

if (dropdownComfortElementExpanded) {
  new Dropdown(dropdownComfortElementExpanded, rooms)
}

if (dropdownComfortElement) {
  new Dropdown(dropdownComfortElement, rooms);
}

if (dropdownZeroGuestElement) {
  new Dropdown(dropdownZeroGuestElement, zeroGuests)
}

if (maskedInput) {
  new InputDateMask(maskedInput);
}

if (expandCheckboxExpanded) {
  new ExpandCheckbox(expandCheckboxExpanded)
}
new ExpandCheckbox(expandCheckbox);

if (slider) {
  new RangeSlider(slider);
}