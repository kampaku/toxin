import './date-dropdown.scss';

function renderElement(options) {
  const { elementTag, elementClasses, parentElement, elementText, attributes } = options;
  const element = document.createElement(elementTag);

  if (elementClasses) {
    elementClasses.forEach((elementClass) => {
      element.classList.add(elementClass);
    });
  }

  if (elementText) {
    element.textContent = elementText;
  }

  if (attributes) {
    for (let [attribute, value] of Object.entries(attributes)) {
      element.setAttribute(attribute, value);
    }
  }

  parentElement.append(element);
  return element;
}

function addZero(number) {
  return number > 9 ? number : '0' + number;
}

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

class DateDropdown {
  constructor(dropWrapper) {
    this.inputs;
    this.dropCalendar = dropWrapper;
    this.date;
    this.setDaysRange = this.setDaysRange.bind(this);
    this.dateArrival;
    this.dateDeparture;
    this.today;
    this.btnClear;
    this.btnApply;
    this.clear = this.clear.bind(this);
    this.apply = this.apply.bind(this);
    this.expand = this.expand.bind(this);
    this.init();
  }

  getDays(options) {
    let daysAmount = 35;
    const { year, month } = options;
    const firstDayOfWeekOfMonth = new Date(year, month).getDay();
    const lastDayOfCurrentMonth = new Date(year, month + 1, 0).getDate();
    const days = [[], [], []];

    for (let i = 1; i < firstDayOfWeekOfMonth; i++) {
      const day = new Date(year, month, -(firstDayOfWeekOfMonth - i - 1));
      days[0].push(day.getDate());
    }
    for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
      days[1].push(i);
    }
    if (days[0].length + days[1].length > daysAmount) {
      daysAmount = 42;
    }
    const remainingDays = daysAmount - days[0].length - days[1].length;
    for (let i = 1; i <= remainingDays; i++) {
      days[2].push(i);
    }

    return { days, year, month };
  }

  swapMonth(year, month) {
    this.date = new Date(year, month);
    let currentDate = new Date();
    if (
      this.date.getMonth() < currentDate.getMonth() &&
      this.date.getFullYear() <= currentDate.getFullYear()
    )
      return;
    let newYear = this.date.getFullYear();
    let newMonth = this.date.getMonth();
    this.destroy();
    this.renderCalendar(this.dropCalendar, { year: newYear, month: newMonth });
    this.expand();
  }

  isDayInRange(tempDate, element) {
    return tempDate >= this.dateArrival &&
      tempDate <= this.dateDeparture &&
      element.classList.contains('calendar__day_active');
  }

  setDaysRange(e) {
    const target = e.target.closest('.calendar__day_active');
    const isDaysSelected = this.dateArrival && this.dateDeparture;

    if (!target) return;
    if (isDaysSelected) {
      return;
    }

    const currentDay = this.today.getDate();
    const currentMonth = this.today.getMonth();
    const isPrevMonthDays = target.textContent < currentDay && currentMonth == this.date.getMonth();

    if (isPrevMonthDays) return;
    target.classList.add('calendar__day_selected');

    if (!this.dateArrival) {
      this.dateArrival = new Date(this.date.getFullYear(), this.date.getMonth(), target.textContent);
    } else {
      this.dateDeparture = new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        target.textContent,
      );
    }

    const isSameDay =
      this.dateDeparture && this.dateArrival.getTime() == this.dateDeparture.getTime();
    if (isSameDay) {
      this.dateDeparture = null;
      return;
    }

    if (this.dateArrival > this.dateDeparture) {
      [this.dateArrival, this.dateDeparture] = [this.dateDeparture, this.dateArrival];
    }

    if (this.dateArrival && this.dateDeparture) {
      const daysContainer = target.parentElement.childNodes;
      daysContainer.forEach((dayElement) => {
        const tempDate = new Date(
          this.date.getFullYear(),
          this.date.getMonth(),
          dayElement.textContent,
        );

        if (this.isDayInRange(tempDate, dayElement)) {
          if (Number(dayElement.textContent) === this.dateArrival.getDate()) dayElement.classList.add('calendar__day_range-first');
          if (Number(dayElement.textContent) === this.dateDeparture.getDate()) dayElement.classList.add('calendar__day_range-last');
          dayElement.classList.add('calendar__day_range');
        }
      });
    }
  }

  renderCalendar(parentElement, dateOptions) {
    const { days, year, month } = this.getDays(dateOptions);
    this.calendar = renderElement({
      elementTag: 'div',
      elementClasses: ['calendar'],
      parentElement: parentElement,
    });
    const calendarHeader = renderElement({
      elementTag: 'div',
      elementClasses: ['calendar__header'],
      parentElement: this.calendar,
    });
    const previousMonthButton = renderElement({
      elementTag: 'button',
      elementClasses: ['calendar__button', 'calendar__button_prev'],
      parentElement: calendarHeader,
      attributes: {
        type: 'button',
      },
    });

    previousMonthButton.addEventListener('click', () => {
      this.swapMonth(year, month - 1);
    });

    renderElement({
      elementTag: 'span',
      elementClasses: ['calendar__date'],
      parentElement: calendarHeader,
      elementText: `${months[month]} ${year}`,
    });
    const nextMonthButton = renderElement({
      elementTag: 'button',
      elementClasses: ['calendar__button', 'calendar__button_next'],
      parentElement: calendarHeader,
      attributes: {
        type: 'button',
      },
    });

    nextMonthButton.addEventListener('click', () => {
      this.swapMonth(year, month + 1);
    });

    const week = renderElement({
      elementTag: 'div',
      elementClasses: ['calendar__week'],
      parentElement: this.calendar,
    });
    weekDays.forEach((day) => {
      renderElement({
        elementTag: 'div',
        elementClasses: ['calendar__week-day'],
        parentElement: week,
        elementText: day,
      });
    });
    const daysContainer = renderElement({
      elementTag: 'div',
      elementClasses: ['calendar__days-container'],
      parentElement: this.calendar,
    });

    daysContainer.addEventListener('click', this.setDaysRange);

    const currentMonthIndexInDays = 1;

    days.forEach((arr, index) => {
      arr.forEach((day, dayNumber) => {
        if (index === currentMonthIndexInDays) {
          const dayElement = renderElement({
            elementTag: 'span',
            elementClasses: ['calendar__day', 'calendar__day_active'],
            parentElement: daysContainer,
            elementText: day,
          });

          const isToday =
            day === this.today.getDate() &&
            month === this.today.getMonth() &&
            year === this.today.getFullYear();

          if (isToday) {
            dayElement.classList.add('calendar__day_today');
          }

          if (this.dateArrival && this.dateDeparture) {
            const tempDate = new Date(this.date.getFullYear(), this.date.getMonth(), day);

            if (this.isDayInRange(tempDate, dayElement)) {
              if (dayNumber === this.dateArrival.getDate() - 1) dayElement.classList.add('calendar__day_selected', 'calendar__day_range-first');
              if (dayNumber === this.dateDeparture.getDate() - 1) dayElement.classList.add('calendar__day_selected', 'calendar__day_range-last');
              dayElement.classList.add('calendar__day_range');
            }
          }

          return;
        }

        renderElement({
          elementTag: 'span',
          elementClasses: ['calendar__day'],
          parentElement: daysContainer,
          elementText: day,
        });
      });
    });

    const btnContainer = renderElement({
      elementTag: 'div',
      elementClasses: ['calendar__buttons-container'],
      parentElement: this.calendar,
    });

    this.btnClear = renderElement({
      elementTag: 'button',
      elementClasses: ['button'],
      parentElement: btnContainer,
      elementText: 'очистить',
      attributes: {
        type: 'button',
      }
    });

    this.btnClear.addEventListener('click', this.clear);

    this.btnApply = renderElement({
      elementTag: 'button',
      elementClasses: ['button'],
      parentElement: btnContainer,
      elementText: 'применить',
      attributes: {
        type: 'button',
      }
    });

    this.btnApply.addEventListener('click', this.apply);
  }

  apply() {
    const arrivalDay = addZero(this.dateArrival.getDate());
    const departureDay = addZero(this.dateDeparture.getDate());
    let arrivalMonth = addZero(this.dateArrival.getMonth());
    let departureMonth = addZero(this.dateDeparture.getMonth());
    const arrivalYear = this.dateArrival.getFullYear();
    const departureYear = this.dateDeparture.getFullYear();
    if (this.inputs.length > 1) {
      const [firstInput, secondInput] = this.inputs;
      firstInput.value = `${arrivalDay}.${arrivalMonth}.${arrivalYear}`;
      secondInput.value = `${departureDay}.${departureMonth}.${departureYear}`;
    } else {
      const [input] = this.inputs;
      arrivalMonth = months[this.dateArrival.getMonth()].slice(0, 3).toLowerCase();
      departureMonth = months[this.dateDeparture.getMonth()].slice(0, 3).toLowerCase();
      input.value = `${arrivalDay} ${arrivalMonth} - ${departureDay} ${departureMonth}`;
    }
    this.expand();
  }

  clear() {
    this.date = new Date();
    let currentYear = this.date.getFullYear();
    let currentMonth = this.date.getMonth();
    this.dateArrival = null;
    this.dateDeparture = null;
    this.inputs.forEach((input) => (input.value = ''));
    this.destroy();
    this.renderCalendar(this.dropCalendar, { year: currentYear, month: currentMonth });
    this.expand();
  }

  expand() {
    this.calendar.classList.toggle('calendar_open');
  }

  destroy() {
    this.calendar.remove();
  }

  init() {
    this.inputs = this.dropCalendar.querySelectorAll('.js-date-input');
    this.date = new Date();
    this.today = new Date();
    let currentYear = this.date.getFullYear();
    let currentMonth = this.date.getMonth();
    this.renderCalendar(this.dropCalendar, { year: currentYear, month: currentMonth });
    const expandButtons = this.dropCalendar.querySelectorAll('.js-expand-button');
    expandButtons.forEach((button) => {
      button.addEventListener('click', this.expand);
    });
  }
}

export { DateDropdown };
