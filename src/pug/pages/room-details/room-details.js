import './room-details.scss';
import '~scss/main.scss';
import '~components/about-room/about-room';
import '~components/bullet-list/bullet-list';
import '~components/chart/chart';
import '~components/footer/footer';
import '~components/header/header';
import '~components/reservation-form/reservation-form';
import '~components/review/review.js';
import makeChart from '~components/chart/chart';

console.log('s');
makeChart({ goodCount: 65, greatCount: 130, satisfactorilyCount: 65, bad: 0 });
console.log('d');