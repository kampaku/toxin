import './reservation-form.scss';
import '~components/button/button';
import '~components/date-dropdown/date-dropdown';
import '~components/dropdown/dropdown';
import { DateDropdown } from '~components/date-dropdown/date-dropdown';
import { dropdownTypes } from '~components/dropdown/dropdown-types';
import { Dropdown } from '~components/dropdown/dropdown';

const reservationForm = document.querySelector('.js-reservation-form');
const dateDropdown = reservationForm && reservationForm.querySelector('.js-date-dropdown');
const dropdownGuestElement = reservationForm && reservationForm.querySelector('.js-guest');
const { guests } = dropdownTypes;

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, guests)
}