function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBgcolorBtn=document.querySelector('.change-color');
const textColorbg=document.querySelector('.color');

changeBgcolorBtn.addEventListener('click',handleBtn);

function handleBtn(){
  const color=getRandomHexColor();
  textColorbg.textContent=color;
  document.body.style.backgroundColor = color;
}