import './room-card.scss';
import '~components/rate-button/rate-button';

class Slider {
  constructor (elem) {
    this.slideIndex = 1;
    this.slides = elem.querySelectorAll('.js-room-card__slider-slide');
    this.prev = elem.querySelector('.js-room-card__slider-button_left');
    this.next = elem.querySelector('.js-room-card__slider-button_right');
    this.dotsWrap = elem.querySelector('.js-room-card__slider-dots');
    this.activeDot = 'room-card__slider-dot_active';
    this.dots = elem.querySelectorAll('.js-room-card__slider-dot');
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
        if (target.classList.contains('room-card__slider-dot') && target === this.dots[i - 1]) {
          this.currentSlide(i);
        }
      }
    });

    this.showSlides(this.slideIndex);
  }
}

const roomCards = document.querySelectorAll('.js-room-card');

roomCards.forEach(card => new Slider(card))