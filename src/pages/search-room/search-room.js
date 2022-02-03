import '~scss/main.scss';

import 'components/checkbox/checkbox';
import 'components/footer/footer';
import 'components/header/header';
import 'components/pagination/pagination';
import 'components/room-card/room-card';
import { DateDropdown } from 'components/date-dropdown/DateDropdown';
import Dropdown from 'components/dropdown/Dropdown';
import { dropdownTypes } from 'components/dropdown/dropdown-types';
import ExpandableCheckbox from 'components/expandable-checkbox-list/ExpandableCheckbox';
import RangeSlider from 'components/range-slider/range-slider';

import './search-room.scss';

const dateDropdown = document.querySelector('.js-filter-date');
const dropdownGuestElement = document.querySelector('.js-guest');
const dropdownComfortElement = document.querySelector('.js-comfort');
const { guests, rooms } = dropdownTypes;
const expandCheckbox = document.querySelector('.js-expand-box');
const slider = document.querySelector('.js-range-slider');

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, guests);
}

if (dropdownComfortElement) {
  new Dropdown(dropdownComfortElement, rooms);
}

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}

if (slider) {
  new RangeSlider(slider);
}

if (expandCheckbox) {
  new ExpandableCheckbox(expandCheckbox);
}
