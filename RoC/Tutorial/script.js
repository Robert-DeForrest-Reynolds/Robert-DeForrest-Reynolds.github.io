const buttons = document.querySelectorAll('.button');
const tutorials = document.querySelectorAll('.tutorial');

// Checks if button is active 
function isButtonActive() {
  const activeButton = document.querySelector('.button--is-active');
}

function handleClick(e) {
  e.preventDefault();

  buttons.forEach(button => button.classList.remove('button--is-active'));
  this.classList.add('button--is-active');

  // Show the tutorial associated to the clicked button
  const targetTutorial = document.querySelector(`#${this.dataset.target}`);
  tutorials.forEach(tutorial => {
    tutorial.classList.remove('tutorial--is-visible');
    targetTutorial.classList.add('tutorial--is-visible');
  })
}

window.addEventListener('load', isButtonActive);
buttons.forEach(button => button.addEventListener('click', handleClick));