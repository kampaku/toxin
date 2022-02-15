import ButtonLike from './ButtonLike';

const buttons = document.querySelectorAll('.js-button-like');

if (buttons) {
  buttons.forEach(button => {
    new ButtonLike(button);
  });
}