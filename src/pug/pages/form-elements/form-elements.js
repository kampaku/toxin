import './form-elements.scss';
import '~scss/main.scss';
import '~components/logo/logo';
import '~components/about-room/about-room';
import '~components/bullet-list/bullet-list';
import '~components/button/button';
import '~components/button-like/ButtonLike';
import '~components/checkbox/checkbox';
import '~components/date-dropdown/DateDropdown';
import '~components/dropdown/Dropdown';
import '~components/expandable-checkbox-list/ExpandableCheckbox';
import '~components/input-text/input-text';
import '~components/pagination/pagination';
import '~components/radio/radio';
import '~components/toggle/toggle';
import '~components/range-slider/range-slider';
import '~components/rate-button/rate-button';
import '~components/review/review';
import '~components/subscription-field/subscription-field';
import IMask from 'imask';
import ExpandCheckbox from '~components/expandable-checkbox-list/ExpandableCheckbox';

const maskedInput = document.querySelector('.js-text-field__input');
const expandCheckbox = document.querySelector('.js-expandable-checkbox-list');
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

new ExpandCheckbox(expandCheckbox);
