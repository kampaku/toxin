export default function buttonLike() {
  let buttons = document.querySelectorAll('.button-like');
  buttons.forEach(button => button.addEventListener('click', () => {
    if(button.classList.contains("button-like--active")) {
      button.textContent-=2;
    }
    button.classList.toggle('button-like--active');
    button.textContent++;
  }));
}