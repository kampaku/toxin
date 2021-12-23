import './header.scss';
import '~components/button/button';

const header = document.querySelector('.js-header');

function headerLink() {
  if(!header) return;
  const links = header.querySelectorAll('.js-header__navigation-link--expand');
  links.forEach(el => {
    el.addEventListener('click', () => {
      el.nextSibling.classList.toggle('header__navigation-dropdown--active');
    });
  });
}

function burgerMenu() {
  if(!header) return;
  const burgerBtn = header.querySelector('.js-header__burger');
  const menu = header.querySelector('.js-header__navigation-list');
  let menuIsActive = false;

  burgerBtn.addEventListener('click', () => {
    if (menuIsActive) {
      document.body.style.overflow = 'visible';
      menuIsActive = !menuIsActive;
    } else {
      document.body.style.overflow = 'hidden';
      menuIsActive = !menuIsActive;
    }
    burgerBtn.classList.toggle('header__burger--active');
    menu.classList.toggle('header__navigation-list--active');
  })
}

headerLink();
burgerMenu();
