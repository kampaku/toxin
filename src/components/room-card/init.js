import 'components/rating-button/rating-button';
import Slider from 'components/room-card/Slider';

import './room-card.scss';

const roomCards = document.querySelectorAll('.js-room-card');

if (roomCards) {
  roomCards.forEach(card => new Slider(card));
}