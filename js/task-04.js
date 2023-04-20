function fun(val=0){
    this.val=val;
    this.btnPlusEvent();
    this.btnMinusEvent();
    this.updateTextVal();
}
const btnPlus = document.querySelector('[data-action="increment"]');
const btnMinus = document.querySelector('[data-action="decrement"]');
const textVal = document.getElementById('value');

fun.prototype.updateTextVal = function(){
    textVal.textContent = this.val;
}

fun.prototype.btnPlusEvent = function (){
    btnPlus.addEventListener('click',()=>{
    this.val += 1;
    this.updateTextVal();
         
});
}

fun.prototype.btnMinusEvent = function (){
    btnMinus.addEventListener('click',()=>{
    this.val -= 1;
    this.updateTextVal();
        
});
}

const counterValue = 0;
new fun(counterValue);

