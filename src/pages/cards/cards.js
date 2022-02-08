import '~scss/main.scss';

import 'components/logo/logo';
import 'components/login-form/login-form';
import 'components/registration-form/registration-form';
import 'components/room-card/room-card';
import 'components/search-form/search-form';
import DateDropdown from 'components/date-dropdown/DateDropdown';
import ReservationForm from 'components/reservation-form/ReservationForm';

import './cards.scss';

const dateElement = document.querySelector('.js-cards-date-dropdown');
const reservationForm = document.querySelector('.js-reservation-form');

if (dateElement) {
  const calendar = new DateDropdown(dateElement, true);
}

const firstDate = new Date('2022-02-24');
const secondDate = new Date('2022-02-28');

new ReservationForm({
  dates: [firstDate, secondDate],
  form: reservationForm
});
