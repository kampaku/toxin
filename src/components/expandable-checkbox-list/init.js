import ExpandableCheckbox from './ExpandableCheckbox';
import './expandable-checkbox-list.scss';

const checkboxLists = document.querySelectorAll('.js-expandable-checkbox-list');

if (checkboxLists) {
  checkboxLists.forEach(checkbox => {
    new ExpandableCheckbox(checkbox);
  });
}