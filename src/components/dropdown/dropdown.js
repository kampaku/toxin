const dropdownType = {
guests : [{
  name: "взрослые",
  value: 0,
},{
  name: "дети",
  value: 0,
},{
  name: "младенцы",
  value: 0,
},]
}

export default class Dropdown {
  constructor(dropdown) {
    this.btn = dropdown.querySelector('.dropdown__button');
    this.list = dropdown.querySelector('.dropdown__inner');
    this.type = dropdown.querySelector('[data-dropdown-type]');
    this.storage = Object.assign({}, dropdownType[this.type.dataset.dropdownType]);
  }

  

  init() {
    console.log(this.storage);

    if (this.btn) {
      this.btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.list.classList.toggle('dropdown__inner--active');
      })
    }

    this.list.querySelector('.dropdown__item-button').addEventListener('click', (e)=>{

      this.storage[0].value +=1;
      console.log(this.storage);
    })
  }
  
  
}