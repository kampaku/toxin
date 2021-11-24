import './review.scss';
import '~components/button-like/button-like';
import ButtonLike from '~components/button-like/button-like';

const reviews = document.querySelectorAll('.js-review');

if (reviews) {
  reviews.forEach(review => {
    let btnLike = review.querySelector('.js-button-like');
    new ButtonLike(btnLike);
  })
}
