import './search-room.scss';
import '~scss/main.scss';
import '~components/checkbox/checkbox';
import '~components/dropdown/Dropdown';
import '~components/expandable-checkbox-list/ExpandableCheckbox';
import '~components/footer/footer';
import '~components/header/header';
import '~components/pagination/pagination';
import '~components/range-slider/range-slider';
import '~components/room-card/room-card';
import { DateDropdown } from '~components/date-dropdown/DateDropdown';
import { dropdownTypes } from '~components/dropdown/dropdown-types';
import { Dropdown } from '~components/dropdown/Dropdown';
import ExpandableCheckbox from '../../../components/expandable-checkbox-list/ExpandableCheckbox';

const dateDropdown = document.querySelector('.js-date-dropdown');
const dropdownGuestElement = document.querySelector('.js-guest');
const dropdownComfortElement = document.querySelector('.js-comfort');
const { guests, rooms } = dropdownTypes;
const expandCheckbox = document.querySelector('.js-expandable-checkbox__list');

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, guests);
}

if (dropdownComfortElement) {
  new Dropdown(dropdownComfortElement, rooms);
}

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}

new ExpandableCheckbox(expandCheckbox);
