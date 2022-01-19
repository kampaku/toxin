import '~components/button/button';
import { dropdownTypes } from '~components/dropdown/dropdown-types';
import { Dropdown } from '~components/dropdown/Dropdown';
import { DateDropdown } from '~components/date-dropdown/DateDropdown';

import './search-form.scss';

const searchForm = document.querySelector('.js-search-form');
const dropdownGuestElement = searchForm && searchForm.querySelector('.js-guest');
const dateDropdown = searchForm && searchForm.querySelector('.js-date-dropdown');
const { guests } = dropdownTypes;

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
})

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, guests)
}

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}
