import './search-form.scss';
import '~components/button/button';
import '~components/date-dropdown/date-dropdown';
import '~components/dropdown/dropdown';
import { dropdownTypes } from '~components/dropdown/dropdown-types';
import { Dropdown } from '~components/dropdown/dropdown';
import { DateDropdown } from '~components/date-dropdown/date-dropdown';

const searchForm = document.querySelector('.js-search-form');
const dropdownGuestElement = searchForm && searchForm.querySelector('.js-guest');
const dateDropdown = searchForm && searchForm.querySelector('.js-date-dropdown');
const { guests } = dropdownTypes;

if (dropdownGuestElement) {
  new Dropdown(dropdownGuestElement, guests)
}

if (dateDropdown) {
  new DateDropdown(dateDropdown);
}
