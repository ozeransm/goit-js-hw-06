const inputSize = document.getElementById('font-size-control');
const textSize = document.getElementById('text');
textSize.style.fontSize = `${inputSize.value}px`;
inputSize.addEventListener('input',()=>{
    textSize.style.fontSize = `${inputSize.value}px`;
});

