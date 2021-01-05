let header = document.querySelector('.header');

function headerLink() {
  let links = header.querySelectorAll('.header__navigation-link--expand');
  links.forEach(el => {
    el.addEventListener('click', (e) => {
      el.nextSibling.classList.toggle('header__navigation-dropdown--active');
    });
  });
}

function burgerMenu() {
  let btn = header.querySelector('.header__burger');

  btn.addEventListener('click', () => {
    btn.classList.toggle('header__burger--active');
  })
}

export { headerLink, burgerMenu }