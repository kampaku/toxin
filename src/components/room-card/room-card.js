import 'components/rating-button/rating-button';

import './room-card.scss';

class Slider {
  constructor (elem) {
    this.slideIndex = 1;
    this.slides = elem.querySelectorAll('.js-room-card__slider-slide');
    this.prev = elem.querySelector('.js-room-card__slider-button_direction_left');
    this.next = elem.querySelector('.js-room-card__slider-button_direction_right');
    this.dotsWrap = elem.querySelector('.js-room-card__slider-dots');
    this.activeDot = 'room-card__slider-dot_active';
    this.dots = elem.querySelectorAll('.js-room-card__slider-dot');
    this.dotsHandler = this.dotsHandler.bind(this);
    this.init();
  }

  showSlides(sliderNum) {
    if (sliderNum > this.slides.length) this.slideIndex = 1;
    if (sliderNum < 1) this.slideIndex = this.slides.length;

    this.slides.forEach((slide) => slide.style.display = "none");
    this.dots.forEach((dot) => dot.classList.remove(this.activeDot));

    this.slides[this.slideIndex - 1].style.display = "block";
    this.dots[this.slideIndex - 1].classList.add(this.activeDot);
  }

  nextSlide (sliderNum) {
    this.showSlides(this.slideIndex += sliderNum)
  }

  currentSlide (sliderNum) {
    this.showSlides(this.slideIndex = sliderNum)
  }

  dotsHandler({ target }) {
    if (!target.matches('.js-room-card__slider-dot')) return;
    this.dots.forEach((dot, i) => {
      if (target === dot) {
        this.currentSlide(i + 1);
      }
    });
  }

  init() {

    this.prev.addEventListener('click', () => {
      this.nextSlide(-1);
    });

    this.next.addEventListener('click', () => {
      this.nextSlide(1);
    });

    this.dotsWrap.addEventListener('click', this.dotsHandler);

    this.showSlides(this.slideIndex);
  }
}

const roomCards = document.querySelectorAll('.js-room-card');

roomCards.forEach(card => new Slider(card))