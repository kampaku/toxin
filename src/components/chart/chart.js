export default function makeChart(obj) {
  const units = document.querySelectorAll('.chart__unit');
  const votes = document.querySelector('.chart__number');
  const chartValues = Object.values(obj);
  const sum = chartValues.reduce((prev, curr) => prev + curr);

  let dashoffset = 0;

  if(units && votes) {
    const fullCircle = 100;
    votes.textContent = sum;

    units.forEach((el, i) => {
      el.style.strokeDasharray = `${fullCircle / (sum / chartValues[i])} ${fullCircle}`;
      el.style.strokeDashoffset = dashoffset;
      dashoffset -= fullCircle / (sum / chartValues[i]);
    });
  }
}