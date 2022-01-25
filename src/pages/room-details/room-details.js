import '~scss/main.scss';

import 'components/about-room/about-room';
import 'components/bullet-list/bullet-list';
import 'components/header/header';
import 'components/footer/footer';
import 'components/reservation-form/reservation-form';
import 'components/review/review.js';
import Chart from 'components/chart/Chart';

import './room-details.scss';

const chartElem = document.querySelector('.js-chart');
new Chart(chartElem, { goodCount: 65, greatCount: 130, satisfactorilyCount: 65, bad: 0 });