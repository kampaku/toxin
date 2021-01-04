// Main js file


import buttonLike from '../components/button-like/button-like';
import dropdown from '../components/dropdown/dropdown';
import checkboxListOpen from '../components/expandable-checkbox-list/expandable-checkbox-list';
import headerLink from '../components/header/header';
import rangeSlider from '../components/range-slider/range-slider';
import Slider from '../components/room-card/room-card';
import makeChart from '../components/chart/chart';


let sliders = document.querySelectorAll('.room-card__slider');

if (sliders) {
  sliders.forEach(slider => new Slider(slider).init());
}

buttonLike();
dropdown();
checkboxListOpen();
headerLink();
makeChart({goodCount: 65, greatCount: 130, satisfactorilyCount: 65, bad: 0});


