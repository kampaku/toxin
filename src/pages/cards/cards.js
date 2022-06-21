import '~scss/main.scss';
import 'components/logo/logo';
import 'components/login-form/login-form';
import 'components/registration-form/registration-form';
import 'components/search-form/search-form';
import 'components/room-card/init';
import DateDropdown from 'components/date-dropdown/DateDropdown';
import ReservationForm from 'components/reservation-form/ReservationForm';

import './cards.scss';


const dateElement = document.querySelector('.js-cards__calendar');
const reservationForm = document.querySelector('.js-reservation-form');

if (dateElement) {
  new DateDropdown(dateElement, true);
}

const firstDate = new Date('2022-02-24');
const secondDate = new Date('2022-02-28');

if (reservationForm) {
  new ReservationForm({
    dates: [firstDate, secondDate],
    form: reservationForm,
  });
}
