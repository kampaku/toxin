import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

import './date-dropdown.scss';

class DateDropdown {
  constructor(root, inline = false) {
    this.root = root;
    this.inline = inline;
    this.handleShow = this.handleShow.bind(this);
    this.initializeOne = this.initializeOne.bind(this);
    this.initializeDouble = this.initializeDouble.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.init();
  }

  selectDates(date1, date2) {
    if (date1 && date2) {
      this.datePick.selectDate([date1, date2]);
    }
  }

  addOnSelectCallback(func) {
    this.datePick.update({
      onSelect() {
        func()
      }
    })
  }

  getDefaultOptions() {
    return {
      prevHtml: 'arrow_back',
      nextHtml: 'arrow_forward',
      minDate: new Date(),
      classes: 'js-date-dropdown__calendar',
      container: this.root,
      range: true,
      multipleDates: true,
      navTitles: {
        days: 'MMMM yyyy',
      },
      buttons: ['clear', {
        content: () => {
          return 'применить'
        },
        onClick: (dp) => {
          dp.hide();
        }
      }],
      onShow: () => {
        document.addEventListener('mousedown', this.hideCalendar);
      },
      onHide: () => {
        document.removeEventListener('mousedown', this.hideCalendar);
      }
    }
  }

  init() {
    this.dropdowns = this.root.querySelectorAll('.js-date-dropdown__input');
    const options = this.getDefaultOptions();

    if (this.inline) {
      this.initializeInline(options);
    }
    if (this.dropdowns.length === 2) {
      this.initializeDouble(options);
    } else if (this.dropdowns.length === 1) {
      this.initializeOne(options);
    }
    this.bindListeners();
  }

  initializeDouble(options) {
    this.datePick = new AirDatepicker(this.dropdowns[0], {
      dateFormat(data) {
        return data[0].toLocaleString(false, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })
      },
      altField: this.dropdowns[1],
      altFieldDateFormat(data) {
        if (!data[1]) return '';
        return data[1].toLocaleString(false, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })
      },
      ...options
    })

    this.dropdowns[1].addEventListener('click', this.handleShow);
  }

  initializeOne(options) {
    this.datePick = new AirDatepicker(this.dropdowns[0], {
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd MMM',
      ...options
    })
  }

  initializeInline(options) {
    const label = this.root.querySelector('.js-date-dropdown__label');
    const input = this.root.querySelector('.js-date-dropdown__input');
    const expandButton = this.root.querySelector('.js-date-dropdown__expand-button');
    label.style.display = 'none';
    input.style.display = 'none';
    expandButton.style.display = 'none';
    this.datePick = new AirDatepicker(this.dropdowns[0], {
      inline: true,
      ...options
    })
  }

  handleShow() {
    if (!this.datePick.$datepicker.isConnected) {
      this.datePick.show();
    }
  }

  hideCalendar(e) {
    if (!e.target.closest('.js-date-dropdown__calendar')) {
      this.datePick.hide();
    }
  }

  bindListeners() {
    const expandButtons = this.root.querySelectorAll('.js-date-dropdown__expand-button');
    expandButtons.forEach(btn => btn.addEventListener('click', this.handleShow));
  }
}

export default DateDropdown;
