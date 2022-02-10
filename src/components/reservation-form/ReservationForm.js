import wNumb from 'wnumb';

import 'components/button/button';
import DateDropdown from 'components/date-dropdown/DateDropdown';
import dropdownTypes from 'components/dropdown/dropdown-types';
import Dropdown from 'components/dropdown/Dropdown';

import './reservation-form.scss';

const reservationForm = document.querySelector('.js-reservation-form');
const dropdownElement = reservationForm && reservationForm.querySelector('.js-dropdown');

class ReservationForm {
  constructor({ form, dates = null }) {
    this.dates = dates;
    this.form = form;
    this.format = wNumb({
      decimals: 0,
      thousand: '\u00A0',
      suffix: '₽',
    });
    this.onSelect = this.onSelect.bind(this);
    this.init();
  }

  onSelect() {
    this.calculateDuration();
    this.calculatePrice();
  }

  calculateDuration() {
    const selectedDates = this.datePick.datePick.selectedDates;
    if (selectedDates.length === 2) {
      this.duration = (selectedDates[1] - selectedDates[0]) / (60 * 60 * 24 * 1000);
    } else {
      this.duration = 0;
    }
    this.totalDays.textContent = this.duration;
  }

  calculatePrice() {
    const pricePerDay = this.convertToNumber(this.roomPrice.textContent);
    const discount = this.convertToNumber(this.discount.textContent);
    const additional = this.convertToNumber(this.additionalServices.textContent);
    const fullPrice = this.duration * pricePerDay;
    const totalPrice = fullPrice - discount + additional;
    this.fullPrice.textContent = this.format.to(fullPrice);
    this.totalPrice.textContent = this.format.to(totalPrice > 0 ? totalPrice : 0);
  }

  createDatePick(dates) {
    this.datePick = new DateDropdown(this.dateDropdown);

    if (dates) {
      this.datePick.selectDates(...dates);
    }

    this.datePick.addOnSelectCallback(this.onSelect);
  }

  findItems() {
    this.dateDropdown = this.form.querySelector('.js-date-dropdown');
    this.roomPrice = this.form.querySelector('.js-reservation-form__price');
    this.totalDays = this.form.querySelector('.js-reservation-form__total-days');
    this.discount = this.form.querySelector('.js-reservation-form__discount');
    this.additionalServices =
      this.form.querySelector('.js-reservation-form__additional-service');
    this.fullPrice = this.form.querySelector('.js-reservation-form__full-price');
    this.totalPrice = this.form.querySelector('.js-reservation-form__total-price');
  }

  convertToNumber(str) {
    return parseInt(str.replace(/\s+/g, ''));
  }

  init() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
    });
    this.findItems();
    this.createDatePick(this.dates);
    this.calculateDuration();
    this.calculatePrice();
  }
}

if (dropdownElement) {
  new Dropdown(dropdownElement, dropdownTypes[dropdownElement.dataset.type]);
}

export default ReservationForm;