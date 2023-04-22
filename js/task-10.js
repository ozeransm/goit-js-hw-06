function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const amount = document.getElementById('controls');
const boxesDiv=document.getElementById('boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn= document.querySelector('[data-destroy]');

createBtn.addEventListener('click',handleCreateBtn);
destroyBtn.addEventListener('click',handleDestroyBtn);

function handleCreateBtn(){
  const { min, max, step} = amount.firstElementChild;
  (parseInt(amount.firstElementChild.value)>=min)&&(parseInt(amount.firstElementChild.value)<=max)
  ? boxesDiv.insertAdjacentHTML('afterbegin', createBoxes(parseInt(amount.firstElementChild.value), parseInt(step)))
  : console.log("value out of range");
  // boxesDiv.innerHTML=createBoxes(parseInt(amount.firstElementChild.value));
}
function handleDestroyBtn(){
  boxesDiv.innerHTML='';
}
function createBoxes(amount, step){
  let size=30;
  let boxDiv='';
  for(let i=1;i<=amount;i+=step){    
    boxDiv+= `<div style="height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size+=10;
  }
  return boxDiv;
}