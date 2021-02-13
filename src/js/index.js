// Main js file

import buttonLike from '../components/button-like/button-like';
import { Dropdown } from '../components/dropdown/dropdown';
import checkboxListOpen from '../components/expandable-checkbox-list/expandable-checkbox-list';
import { headerLink, burgerMenu } from '../components/header/header';
import rangeSlider from '../components/range-slider/range-slider';
import Slider from '../components/room-card/room-card';
import makeChart from '../components/chart/chart';
import { dropdownTypes } from '../components/dropdown/dropdown-types';

const sliders = document.querySelectorAll('.room-card__slider');
const dropdownGuestElement = document.querySelector('.js-guest');
const dropdownComfortElement = document.querySelector('.js-comfort');
const { guests, rooms } = dropdownTypes;

if (sliders) {
  sliders.forEach((slider) => new Slider(slider).init());
}

burgerMenu();
buttonLike();
try {
  const dropdownGuest = new Dropdown(dropdownGuestElement, guests);
  const dropdownComfort = new Dropdown(dropdownComfortElement, rooms);
  dropdownGuest.init();
  dropdownComfort.init();
} catch (error) {}

checkboxListOpen();
headerLink();
makeChart({ goodCount: 65, greatCount: 130, satisfactorilyCount: 65, bad: 0 });
