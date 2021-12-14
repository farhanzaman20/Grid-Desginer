// Select Colors

// Variables
let selectedColor = 'grey';

// Color Select Event Listeners
document.querySelectorAll('.color-select').forEach(e => e.addEventListener('click', function () {
  if (e.classList.contains('selected')) { console.log('Yes') } else {
    document.getElementsByClassName('color-select selected')[0].classList.add('unselected');
    document.getElementsByClassName('color-select selected')[0].classList.remove('selected');
    this.classList.remove('unselected');
    this.classList.add('selected');
    selectedColor = this.id;
  }
}))