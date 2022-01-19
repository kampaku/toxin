import ButtonLike from 'components/button-like/ButtonLike';

import './review.scss';

const reviews = document.querySelectorAll('.js-review');

if (reviews) {
  reviews.forEach(review => {
    let btnLike = review.querySelector('.js-button-like');
    new ButtonLike(btnLike);
  })
}
