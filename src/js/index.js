// Main js file


import buttonLike from '../components/button-like/button-like';
import Dropdown from '../components/dropdown/dropdown';
import checkboxListOpen from '../components/expandable-checkbox-list/expandable-checkbox-list';
import { headerLink, burgerMenu } from '../components/header/header';
import rangeSlider from '../components/range-slider/range-slider';
import Slider from '../components/room-card/room-card';
import makeChart from '../components/chart/chart';



let sliders = document.querySelectorAll('.room-card__slider');
const dropdownItems = document.querySelectorAll('.dropdown');

if (sliders) {
  sliders.forEach(slider => new Slider(slider).init());
}

burgerMenu()
buttonLike();
//dropdownItems.forEach(elem => new Dropdown(elem).init());
checkboxListOpen();
headerLink();
makeChart({goodCount: 65, greatCount: 130, satisfactorilyCount: 65, bad: 0});


