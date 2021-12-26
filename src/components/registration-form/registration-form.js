import './registration-form.scss';
import '~components/button/button';
import '~components/input-text/input-text';
import '~components/radio/radio';
import '~components/toggle/toggle';
import IMask from 'imask';

const registrationForm = document.querySelector('.js-registration-form');
const maskedInput = registrationForm && registrationForm.querySelector('.js-input-text__input');
if (maskedInput) {
  IMask(
    maskedInput,
    {
      mask: Date,
      overwrite: true,
      autofix: true,
      blocks: {
        d: {mask: IMask.MaskedRange, placeholderChar: 'd', from: 1, to: 31, maxLength: 2},
        m: {mask: IMask.MaskedRange, placeholderChar: 'm', from: 1, to: 12, maxLength: 2},
        Y: {mask: IMask.MaskedRange, placeholderChar: 'y', from: 1900, to: 2020, maxLength: 4}
      }
    }
  )
}
