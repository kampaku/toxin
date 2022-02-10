import 'components/button/button';
import dropdownTypes from 'components/dropdown/dropdown-types';
import Dropdown from 'components/dropdown/Dropdown';
import DateDropdown from 'components/date-dropdown/DateDropdown';

import './search-form.scss';

const searchForm = document.querySelector('.js-search-form');
const dropdownElement = searchForm && searchForm.querySelector('.js-dropdown');
const dateDropdown = searchForm && searchForm.querySelector('.js-date-dropdown');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
})

if (dropdownElement) {
  new Dropdown(dropdownElement, dropdownTypes[dropdownElement.dataset.type])
}

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}
