export default function checkboxListOpen() {
  let btn = document.querySelector('.checkbox__wrapper');
  let list = document.querySelector('.checkbox-list');
  let img = document.querySelector('.checkbox-button');
  if (btn) {
    btn.addEventListener('click', () => {
      list.classList.toggle('checkbox-list--active');
      img.classList.toggle('checkbox-button--active');
    })
  }
}
