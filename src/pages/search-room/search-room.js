import '~scss/main.scss';

import 'components/checkbox/checkbox';
import 'components/footer/footer';
import 'components/header/init';
import 'components/pagination/pagination';
import 'components/expandable-checkbox-list/init';
import 'components/room-card/init';
import DateDropdown from 'components/date-dropdown/DateDropdown';
import Dropdown from 'components/dropdown/Dropdown';
import dropdownTypes from 'components/dropdown/dropdown-types';
import RangeSlider from 'components/range-slider/RangeSlider';

import './search-room.scss';

const dateDropdown = document.querySelector('.js-date-dropdown');
const dropdowns = document.querySelectorAll('.js-dropdown');
const slider = document.querySelector('.js-range-slider');

if (dropdowns) {
  dropdowns.forEach(dropdown => {
    new Dropdown(dropdown, dropdownTypes[dropdown.dataset.type]);
  });
}

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}

if (slider) {
  new RangeSlider(slider);
}