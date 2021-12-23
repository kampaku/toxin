import './search-room.scss';
import '~scss/main.scss';
import '~components/checkbox/checkbox';
import '~components/dropdown/dropdown';
import '~components/expandable-checkbox-list/expandable-checkbox-list';
import '~components/footer/footer';
import '~components/header/header';
import '~components/pagination/pagination';
import '~components/range-slider/range-slider';
import '~components/room-card/room-card';
import { DateDropdown } from '~components/date-dropdown/date-dropdown';
import { dropdownTypes } from '~components/dropdown/dropdown-types';
import { Dropdown } from '~components/dropdown/dropdown';
import Slider from '~components/room-card/room-card';
import ExpandCheckbox from '../../../components/expandable-checkbox-list/expandable-checkbox-list';

const dateDropdown = document.querySelector('.js-date-dropdown');
const dropdownGuestElement = document.querySelector('.js-guest');
const dropdownComfortElement = document.querySelector('.js-comfort');
const { guests, rooms } = dropdownTypes;
const roomCards = document.querySelectorAll('.js-room-card');
const expandCheckbox = document.querySelector('.js-expandable-checkbox__list');

roomCards.forEach(card => new Slider(card));

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, guests);
}

if (dropdownComfortElement) {
  new Dropdown(dropdownComfortElement, rooms);
}

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}

new ExpandCheckbox(expandCheckbox);
