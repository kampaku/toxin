import '~scss/main.scss';

import IMask from 'imask';

import 'components/logo/logo';
import 'components/about-room/about-room';
import 'components/bullet-list/bullet-list';
import 'components/button/button';
import 'components/checkbox/checkbox';
import 'components/button-like/ButtonLike';
import 'components/input-text/input-text';
import 'components/pagination/pagination';
import 'components/radio/radio';
import 'components/toggle/toggle';
import 'components/range-slider/range-slider';
import 'components/rating-button/rating-button';
import 'components/subscription-field/subscription-field';
import 'components/review/review';
import ExpandCheckbox from 'components/expandable-checkbox-list/ExpandableCheckbox';
import { dropdownTypes } from 'components/dropdown/dropdown-types';
import { DateDropdown } from 'components/date-dropdown/DateDropdown';
import { Dropdown } from 'components/dropdown/Dropdown';

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
  IMask(
    maskedInput,
    {
      mask: Date,
      overwrite: true,
      autofix: true,
      blocks: {
        d: {mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2},
        m: {mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2},
        Y: {mask: IMask.MaskedRange, placeholderChar: 'y', from: 1900, to: 2020, maxLength: 4}
      }
    }
  )
}

if (expandCheckboxExpanded) {
  new ExpandCheckbox(expandCheckboxExpanded)
}
new ExpandCheckbox(expandCheckbox);
