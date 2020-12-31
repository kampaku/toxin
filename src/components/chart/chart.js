export default function makeChart(obj) {
  const units = document.querySelectorAll('.chart__unit'),
  number = document.querySelector('.chart__number'),
  { greatCount, goodCount, satisfactorilyCount, bad } = obj;
  const sum = greatCount + goodCount + satisfactorilyCount + bad;
  const arr = [goodCount, greatCount,satisfactorilyCount, bad];
  let dashoffset = 0;
  if(units && number) {
    number.textContent = sum;
    units.forEach((el, i) => {
      el.style.strokeDasharray = `${100 / (sum / arr[i])} 100`;
      el.style.strokeDashoffset = dashoffset;
      dashoffset -= 100 / (sum / arr[i]); 
    });
  }
  
}