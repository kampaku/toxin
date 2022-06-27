import './chart.scss';

class Chart {
  constructor(root, options) {
    this.root = root;
    this.options = options;
    this.dashoffset = 0;
    this.calculateSum();
    this.searchElements();
    this.init();
  }

  calculateSum = () => {
    this.chartValues = Object.values(this.options);
    this.sum = this.chartValues.reduce((prev, curr) => prev + curr);
  }

  searchElements = () => {
    this.units = this.root.querySelectorAll('.js-chart__unit');
    this.votes = this.root.querySelector('.js-chart__number');
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

export default Chart;
