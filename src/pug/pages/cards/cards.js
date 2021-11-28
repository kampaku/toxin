import './cards.scss';
import '~scss/main.scss';
import '~components/logo/logo';
import '~components/login-form/login-form';
import '~components/registration-form/registration-form';
import '~components/reservation-form/reservation-form';
import '~components/search-form/search-form';
import '~components/room-card/room-card';
import '~components/registration-form/registration-form';
import '~components/reservation-form/reservation-form';
import '~components/search-form/search-form';
import '~components/room-card/room-card';
import Slider from '~components/room-card/room-card';

const roomCards = document.querySelectorAll('.js-room-card');

roomCards.forEach(card => new Slider(card))


