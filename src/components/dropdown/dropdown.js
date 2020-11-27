export default function dropdown() {
  let btn = document.querySelector('.dropdown__button');
  let list = document.querySelector('.dropdown__inner')
  btn.addEventListener('click', () => {
    list.classList.toggle('dropdown__inner--active');
  })
}