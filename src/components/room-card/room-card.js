export default class Slider {
  constructor (elem) {
    this.slideIndex = 1;
    this.slides = elem.querySelectorAll('.room-card__slider-slide');
    this.prev = elem.querySelector('.room-card__slider-button--left');
    this.next = elem.querySelector('.room-card__slider-button--right');
    this.dotsWrap = elem.querySelector('.room-card__slider-dots');
    this.dots = elem.querySelectorAll('.room-card__slider-dot');
  }

  showSlides(n) {
    if (n > this.slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = this.slides.length;

    this.slides.forEach((slide) => slide.style.display = "none");
    this.dots.forEach((dot) => dot.classList.remove('room-card__slider-dot--active'));

    this.slides[this.slideIndex - 1].style.display = "block";
    this.dots[this.slideIndex - 1].classList.add('room-card__slider-dot--active');
  }
  
  nextSlide (n) {
    this.showSlides(this.slideIndex += n)
  }
  
  currentSlide (n) {
    this.showSlides(this.slideIndex = n)
  }
  
  init() {
    
    this.prev.addEventListener('click', () => {
      this.nextSlide(-1);
    });
    
    this.next.addEventListener('click', () => {
      this.nextSlide(1);
    });
    
    this.dotsWrap.addEventListener('click', (event) => {
      let target = event.target;
      for (let i = 0; i < this.dots.length + 1; i++) {
        if (target.classList.contains('room-card__slider-dot') && target == this.dots[i - 1]) {
          this.currentSlide(i);
        }
      }
    });
    this.showSlides(this.slideIndex);
  }
}