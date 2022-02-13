import '~scss/main.scss';

import 'components/checkbox/checkbox';
import 'components/footer/footer';
import 'components/header/init';
import 'components/pagination/pagination';
import 'components/room-card/room-card';
import DateDropdown from 'components/date-dropdown/DateDropdown';
import Dropdown from 'components/dropdown/Dropdown';
import dropdownTypes from 'components/dropdown/dropdown-types';
import ExpandableCheckbox from 'components/expandable-checkbox-list/ExpandableCheckbox';
import RangeSlider from 'components/range-slider/RangeSlider';

import './search-room.scss';

const dateDropdown = document.querySelector('.js-date-dropdown');
const dropdowns = document.querySelectorAll('.js-dropdown');
const checkboxList = document.querySelector('.js-expandable-checkbox-list');
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

if (checkboxList) {
  new ExpandableCheckbox(checkboxList);
}
