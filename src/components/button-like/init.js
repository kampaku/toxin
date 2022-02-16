import ButtonLike from './ButtonLike';
import './button-like.scss';

const buttons = document.querySelectorAll('.js-button-like');

if (buttons) {
  buttons.forEach(button => {
    new ButtonLike(button);
  });
}