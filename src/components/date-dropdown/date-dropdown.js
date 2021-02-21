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

class DateDropdown {
  constructor(dropWrapper) {
    this.dropCalendar = dropWrapper;
    this.date;
  }

  getDays(options) {
    let daysAmount = 35;
    const { year, month } = options;
    const firstDayOfWeekOfMonth = new Date(year, month).getDay();
    const lastDayOfWeekOfMonth = new Date(year, month).getDay();
    const lastDayOfCurrentMonth = new Date(year, month + 1, 0).getDate();
    const days = [[], [], []];

    for (let i = 1; i < firstDayOfWeekOfMonth; i++) {
      const day = new Date(year, month, -(firstDayOfWeekOfMonth - i - 1));
      days[0].push(day.getDate());
    }
    for (let i = 1; i <= lastDayOfCurrentMonth; i++) {
      days[1].push(i);
    }
    if((days[0].length + days[1].length) > daysAmount) {
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
    let newYear = this.date.getFullYear();
    let newMonth = this.date.getMonth();
    this.destroy();
    this.renderCalendar(this.dropCalendar, { year: newYear, month : newMonth });
  }

  destroy() {
    const calendar = this.dropCalendar.querySelector('.calendar');
    calendar.remove();
  }

  renderCalendar(parentElement, dateOptions) {

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
    console.log(dateOptions)
    const { days, year, month } = this.getDays(dateOptions);
    const calendar = renderElement({
      elementTag: 'div',
      elementClasses: ['calendar'],
      parentElement: parentElement,
    });
    const calendarHeader = renderElement({
      elementTag: 'div',
      elementClasses: ['calendar__header'],
      parentElement: calendar,
    });
    const previousMonthButton = renderElement({
      elementTag: 'button',
      elementClasses: ['calendar__button', 'calendar__button--prev'],
      parentElement: calendarHeader,
      attributes: {
        type: 'button',
      },
    });

    previousMonthButton.addEventListener('click', () => {
      this.swapMonth(year, month - 1);
    });

    const date = renderElement({
      elementTag: 'span',
      elementClasses: ['calendar__date'],
      parentElement: calendarHeader,
      elementText: `${months[month]} ${year}`,
    });
    const nextMonthButton = renderElement({
      elementTag: 'button',
      elementClasses: ['calendar__button', 'calendar__button--next'],
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
      parentElement: calendar,
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
      parentElement: calendar,
    });

    const currentMonthIndexInDays = 1;
    const today = new Date();

    days.forEach((arr, index) => {
      arr.forEach((day) => {
        if (index === currentMonthIndexInDays) {
          const dayElement = renderElement({
            elementTag: 'span',
            elementClasses: ['calendar__day', 'calendar__day--active'],
            parentElement: daysContainer,
            elementText: day,
          });
          const isToday =
            day === today.getDate() && month == today.getMonth() && year == today.getFullYear();
          if (isToday) {
            dayElement.classList.add('calendar__day--today');
          }
          return;
        }
        const dayElement = renderElement({
          elementTag: 'span',
          elementClasses: ['calendar__day'],
          parentElement: daysContainer,
          elementText: day,
        });
      });
    });
  }

  init() {
    this.date = new Date();
    let currentYear = this.date.getFullYear();
    let currentMonth = this.date.getMonth();
    this.renderCalendar(this.dropCalendar, { year: currentYear, month : currentMonth });

  
  }
}

export { DateDropdown };
