import './chart.scss';

export default class Chart {
  constructor(elem, options) {
    this.units = elem.querySelectorAll('.js-chart__unit');
    this.votes = elem.querySelector('.js-chart__number');
    this.chartValues = Object.values(options);
    this.sum = this.chartValues.reduce((prev, curr) => prev + curr);
    this.dashoffset = 0;
    this.init();
  }

  init() {
    const fullCircle = 100;
    this.votes.textContent = this.sum;

    this.units.forEach((el, i) => {
      const dashArrayX = fullCircle / (this.sum / this.chartValues[i])
      el.style.strokeDasharray = `${dashArrayX > 0 ? dashArrayX - 1 : 0} ${fullCircle}`;
      el.style.strokeDashoffset = this.dashoffset;
      this.dashoffset -= fullCircle / (this.sum / this.chartValues[i]);
    });
  }
}