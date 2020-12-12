// Main js file


import buttonLike from '../components/button-like/button-like';
import dropdown from '../components/dropdown/dropdown';
import checkboxListOpen from '../components/expandable-checkbox-list/expandable-checkbox-list';
import headerLink from '../components/header/header';
import rangeSlider from '../components/range-slider/range-slider';
import Slider from '../components/room-card/room-card';


let sliders = document.querySelectorAll('.room-card__slider');
buttonLike();
dropdown();
checkboxListOpen();
headerLink();
sliders.forEach(slider => new Slider(slider).init());


