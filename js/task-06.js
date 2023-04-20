const inputText=document.querySelector('#validation-input');
const inputTextLength = inputText.getAttribute('data-length');

inputText.addEventListener('blur', ()=>{
    inputText.classList.add("invalid");
    !(inputTextLength - inputText.value.length) 
    ? inputText.classList.replace("invalid", "valid")
    : inputText.classList.replace("valid", "invalid");
      
});

