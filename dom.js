const rightButton = document.getElementById('right-button');
const leftButton = document.getElementById('left-button');
const portrait = document.getElementById('portrait');

const images = [
  'assets/image_1.jpg',
  'assets/image_2.jpeg',
  'assets/image_3.jpeg'
];
let displayImage = 0;

rightButton.addEventListener('click', event => {
  if (displayImage < images.length-1){
    displayImage++;
    portrait.src = images[displayImage];
  } 
});

leftButton.addEventListener('click', event => {
  if (displayImage > 0){
    displayImage--
    portrait.src = images[displayImage]
  }
});