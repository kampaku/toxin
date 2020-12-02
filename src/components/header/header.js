export default function headerLink() {
  let links = document.querySelectorAll('.header__navigation-link--expand');
  links.forEach(el => {
    el.addEventListener('click', (e) => {
      
      el.nextSibling.classList.toggle('header__navigation-dropdown--active');
      if (el.nextSibling.classList.contains('header__navigation-dropdown--active') && e.target != el) {
        
        el.nextSibling.classList.remove('header__navigation-dropdown--active')
      }
    });
  });
}