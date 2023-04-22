const inputElem = document.getElementById('name-input');
const spanElem = document.getElementById('name-output');

inputElem.addEventListener('input',()=>{
    spanElem.textContent = (inputElem.value)&&(inputElem.value.replace(/ /g,"")) ? inputElem.value : 'Anonymous';

});
