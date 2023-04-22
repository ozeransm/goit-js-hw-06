const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(ev){
    ev.preventDefault();
    const {elements:{email,password}}=ev.currentTarget;
    const objForm = ((email.value)&&(password.value))
    ? {[email.name]:email.value, [password.name]:password.value}
    : alert("fill in all fields of the form");
    ev.currentTarget.reset();
    objForm ? console.log(objForm) : {};
}

