import 'components/button/button';
import 'components/radio/radio';
import 'components/toggle/toggle';
import InputDateMask from 'components/input-text/input-text';

import './registration-form.scss';

const registrationForm = document.querySelector('.js-registration-form');
const maskedInput = registrationForm && registrationForm.querySelector('.js-input-text__input');

if (maskedInput) {
  new InputDateMask(maskedInput)
}
