import Slider from 'components/room-card/Slider';

const roomCards = document.querySelectorAll('.js-room-card');

if (roomCards) {
  roomCards.forEach(card => new Slider(card));
}