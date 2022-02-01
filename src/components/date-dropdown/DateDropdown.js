import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

import './date-dropdown.scss';

class DateDropdown {
  constructor(root, inline = false) {
    this.root = root;
    this.inline = inline;
    this.handleShow = this.handleShow.bind(this);
    this.init();
  }

  init() {
    this.dropdowns = this.root.querySelectorAll('.js-date-dropdown__input');

    if (this.inline) {
      const label = this.root.querySelector('.js-date-dropdown__label');
      const input = this.root.querySelector('.js-date-dropdown__input');
      const expandButton = this.root.querySelector('.js-date-dropdown__expand-button');
      label.style.display = 'none';
      input.style.display = 'none';
      expandButton.style.display = 'none';
    }

    if (this.dropdowns.length === 2) {
      this.initializeDouble();
    } else if (this.dropdowns.length === 1) {
      this.initializeOne();
    }
    this.datePick.update({
      minDate: new Date(),
      classes: 'js-date-dropdown__calendar',
      buttons: ['clear', {
        content: () => {
          return 'применить'
        },
        onClick: (dp) => {
          dp.hide();
        }
      }],
      onShow: () => {
        document.addEventListener('mousedown', hideCalendar)
      },
      onHide: () => {
        document.removeEventListener('mousedown', hideCalendar)
      }
    })
    const hideCalendar = (e) => {
      if (!e.target.closest('.js-date-dropdown__calendar')) {
        this.datePick.hide();
      }
    }
    this.bindListeners();
  }

  initializeDouble() {
    this.datePick = new AirDatepicker(this.dropdowns[0], {
      prevHtml: `<svg><path d="M 13,10 l -7,7 l 7,7"></path><path d="M 6,17 l 16,0"></path></svg>`,
      nextHtml: `<svg><path d="M 19,10 l 7,7 l -7,7"></path><path d="M 26,17 l -16,0"></path></svg>`,
      altField: this.dropdowns[1],
      altFieldDateFormat: 'dd.MM.yyyy',
      container: this.root,
      range: true,
      multipleDates: true,
      dateFormat: 'dd.MM.yyyy',
      navTitles: {
        days: 'MMMM yyyy',
      },
      onSelect: ( {datepicker, formattedDate}) => {
        this.dropdowns[1].value = '';
        if (datepicker.selectedDates.length > 1) {
          this.dropdowns[0].value = formattedDate[0]
          this.dropdowns[1].value = formattedDate[1]
        }
      },
    })

    this.dropdowns[1].addEventListener('click', this.handleShow);
  }

  initializeOne() {
    this.datePick = new AirDatepicker(this.dropdowns[0], {
      prevHtml: `<svg><path d='M 13,10 l -7,7 l 7,7'></path><path d='M 6,17 l 16,0'></path></svg>`,
      nextHtml: `<svg><path d='M 19,10 l 7,7 l -7,7'></path><path d='M 26,17 l -16,0'></path></svg>`,
      inline: this.inline,
      container: this.root,
      range: true,
      multipleDates: true,
      multipleDatesSeparator: ' - ',
      dateFormat: 'dd MMM',
      navTitles: {
        days: 'MMMM yyyy',
      },
    })
  }

  handleShow() {
    if (!this.datePick.$datepicker.isConnected) {
      this.datePick.show();
    }
  }

  bindListeners() {
    const expandButtons = this.root.querySelectorAll('.js-date-dropdown__expand-button');
    expandButtons.forEach(btn => btn.addEventListener('click', this.handleShow));
  }
}

export { DateDropdown };
