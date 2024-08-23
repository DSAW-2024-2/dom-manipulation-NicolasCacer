const rightButton = document.getElementById('right-button');
const leftButton = document.getElementById('left-button');
const portrait = document.getElementById('portrait');

rightButton.addEventListener('click', event => {
  portrait.style.backgroundColor = "red";
  console.log("se puso rojo")
});

leftButton.addEventListener('click', event => {
  portrait.style.backgroundColor = "green";
  console.log("se puso verde")
});