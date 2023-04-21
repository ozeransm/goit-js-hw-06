function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const amount = document.getElementById('controls');
const boxesDiv=document.getElementById('boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn= document.querySelector('data-destroy');

console.log(createBtn);

createBtn.addEventListener('click',handleCreateBtn);
createBtn.addEventListener('click',handleDestroyBtn);

function handleCreateBtn(){
  const boxDiv=new Array(parseInt(amount.firstElementChild.value));
  let size=20;
  console.log(boxDiv);
  const box1 = boxDiv.reduce((box,el)=>{
    size+=10;  
    console.log('sdagsdfgdas',el);
    return [...box, `<div width=${size} height=${size}></div>`];
  },[]);
  
}

function createBoxes(amount){
  const boxDiv=new Array(parseInt(amount.firstElementChild.value));
  // for(let i=1;i<=parseInt(amount.firstElementChild.value);i++){
    
  // }

}