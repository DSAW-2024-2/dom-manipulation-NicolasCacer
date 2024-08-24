const rightButton = document.getElementById('right-button');
const leftButton = document.getElementById('left-button');
const portrait = document.getElementById('portrait');

const images = [
  'assets/image_1.jpg',
  'assets/image_2.jpeg',
  'assets/image_3.jpeg'
];
let displayImage = 0;
UpdateButtons()

leftButton.addEventListener('click', event => {
  if (displayImage > 0){
    displayImage--
    portrait.src = images[displayImage]
    UpdateButtons()
  }
});

rightButton.addEventListener('click', event => {
  if (displayImage < images.length-1){
    displayImage++;
    portrait.src = images[displayImage]
    UpdateButtons()
  }
});

leftButton.addEventListener('mouseover',event =>{
  leftButton.style.opacity = 0.3;
});

leftButton.addEventListener('mouseout',event =>{
  leftButton.style.opacity = 1;
});

rightButton.addEventListener('mouseover',event =>{
  rightButton.style.opacity = 0.3;
});

rightButton.addEventListener('mouseout',event =>{
  rightButton.style.opacity = 1;
});

function UpdateButtons(){
  if (displayImage === 0){
    leftButton.style.visibility = 'hidden';  
  }
  else if (displayImage === images.length-1){
    rightButton.style.visibility = 'hidden';  
  }
  else {
    leftButton.style.visibility = 'visible';
    rightButton.style.visibility = 'visible';  
  }
}