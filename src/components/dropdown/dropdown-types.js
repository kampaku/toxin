const dropdownTypes = {
  guests: {
    items: [
      { name: 'взрослые', value: 2 },
      { name: 'дети', value: 0 },
      { name: 'младенцы', value: 1, wordForms: ['младенец', 'младенца', 'младенцев']},
    ],
    wordForms: ['гость', 'гостя', 'гостей'],
  },
  rooms: {
    items: [
      { name: 'спальни', value: 2, wordForms: ['спальня', 'спальни', 'спальней'] },
      { name: 'кровати', value: 2, wordForms: ['кровать', 'кровати', 'кроватей'] },
      { name: 'ванные комнаты', value: 1, wordForms: ['ванная комната', 'ванные комнаты', 'ванных комнат'] },
    ],
  },
};

export { dropdownTypes };
