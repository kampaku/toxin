class Slider {
  constructor (elem) {
    this.elem = elem;
    this.slideIndex = 1;
    this.activeDotClass = 'room-card__slider-dot_active';
    this.searchElements();
    this.init();
  }

  searchElements = () => {
    this.slides = this.elem.querySelectorAll('.js-room-card__slider-slide');
    this.prev = this.elem.querySelector('.js-room-card__slider-button_direction_left');
    this.next = this.elem.querySelector('.js-room-card__slider-button_direction_right');
    this.dotsWrap = this.elem.querySelector('.js-room-card__slider-dots');
    this.dots = this.elem.querySelectorAll('.js-room-card__slider-dot');
  }

  showSlides = (sliderNum) => {
    if (sliderNum > this.slides.length) this.slideIndex = 1;
    if (sliderNum < 1) this.slideIndex = this.slides.length;

    this.slides.forEach((slide) => slide.classList.add('hidden'));
    this.dots.forEach((dot) => dot.classList.remove(this.activeDotClass));

    this.slides[this.slideIndex - 1].classList.remove('hidden');
    this.dots[this.slideIndex - 1].classList.add(this.activeDotClass);
  }

  nextSlide = (sliderNum) => {
    this.showSlides(this.slideIndex += sliderNum)
  }

  currentSlide = (sliderNum) => {
    this.showSlides(this.slideIndex = sliderNum)
  }

  handlerDotClick = ({ target }) => {
    if (!target.matches('.js-room-card__slider-dot')) return;
    this.dots.forEach((dot, i) => {
      if (target === dot) {
        this.currentSlide(i + 1);
      }
    });
  }

  init = () => {

    this.prev.addEventListener('click', () => {
      this.nextSlide(-1);
    });

    this.next.addEventListener('click', () => {
      this.nextSlide(1);
    });

    this.dotsWrap.addEventListener('click', this.handlerDotClick);

    this.showSlides(this.slideIndex);
  }
}

export default Slider;
