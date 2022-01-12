import './header-menu.scss';

const submenus = document.querySelectorAll('.js-header-menu__link_expand');
function openSubmenu() {
  if (!submenus) return;
  submenus.forEach(menu => {
    menu.addEventListener('click', () => {
      menu.nextElementSibling.classList.toggle('header-menu__submenu_active');
    })
  })
}

openSubmenu();