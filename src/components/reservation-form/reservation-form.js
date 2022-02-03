import 'components/button/button';
import { DateDropdown } from 'components/date-dropdown/DateDropdown';
import { dropdownTypes } from 'components/dropdown/dropdown-types';
import Dropdown from 'components/dropdown/Dropdown';

import './reservation-form.scss';

const reservationForm = document.querySelector('.js-reservation-form');
const dateDropdown = reservationForm && reservationForm.querySelector('.js-date-dropdown');
const dropdownGuestElement = reservationForm && reservationForm.querySelector('.js-guest');
const { guests } = dropdownTypes;

reservationForm.addEventListener('submit', e => {
  e.preventDefault();
})

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, guests)
}