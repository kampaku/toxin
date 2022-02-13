import ExpandableCheckbox from './ExpandableCheckbox';

const checkboxLists = document.querySelectorAll('.js-expandable-checkbox-list');

if (checkboxLists) {
  checkboxLists.forEach(checkbox => {
    new ExpandableCheckbox(checkbox);
  });
}