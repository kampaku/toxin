import '~scss/main.scss';

import 'components/logo/logo';
import 'components/login-form/login-form';
import 'components/registration-form/registration-form';
import 'components/reservation-form/reservation-form';
import 'components/room-card/room-card';
import 'components/search-form/search-form';
import DateDropdown from 'components/date-dropdown/DateDropdown';

import './cards.scss';

const dateElement = document.querySelector('.js-cards-date-dropdown');

if (dateElement) {
  new DateDropdown(dateElement, true)
}
