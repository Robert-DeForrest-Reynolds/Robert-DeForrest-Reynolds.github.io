const buttons = document.querySelectorAll('.button');
const menus = document.querySelectorAll('.menu');

// Checks if button is active 
function isButtonActive() {
  const activeButton = document.querySelector('.button--is-active');
}

function handleClick(e) {
  e.preventDefault();

  buttons.forEach(button => button.classList.remove('button--is-active'));
  this.classList.add('button--is-active');

  // Show the menu associated to the clicked button
  const targetMenu = document.querySelector(`#${this.dataset.target}`);
  menus.forEach(menu => {
    menu.classList.remove('menu--is-visible');
    targetMenu.classList.add('menu--is-visible');
  })
}

window.addEventListener('load', isButtonActive);
buttons.forEach(button => button.addEventListener('click', handleClick));