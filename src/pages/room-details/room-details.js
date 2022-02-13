import '~scss/main.scss';

import 'components/about-room/about-room';
import 'components/bullet-list/bullet-list';
import 'components/header/init';
import 'components/header-menu/init'
import 'components/footer/footer';
import 'components/review/review.js';
import ReservationForm from 'components/reservation-form/ReservationForm';
import Chart from 'components/chart/Chart';

import './room-details.scss';

const chartElem = document.querySelector('.js-chart');
const reservationForm = document.querySelector('.js-reservation-form');

new Chart(chartElem, { goodCount: 65, greatCount: 130, satisfactorilyCount: 65, bad: 0 });

const firstDate = new Date('2022-02-24');
const secondDate = new Date('2022-02-28');

new ReservationForm({
  dates: [firstDate, secondDate],
  form: reservationForm
});