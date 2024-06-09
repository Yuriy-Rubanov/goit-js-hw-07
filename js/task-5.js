function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorChange = document.querySelector('.change-color')
  

colorChange.addEventListener('click', handler);
  
function handler() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  const spanBackground = document.querySelector('.color');
    spanBackground.textContent = newColor;
}