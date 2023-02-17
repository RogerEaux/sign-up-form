function checkMatch(){
    password = document.getElementById('password');
    confirmPassword = document.getElementById('confirm-password');
    warning = document.querySelector('.form-element #password + span');

    if(password.value != confirmPassword.value){
        warning.classList.add('not-match');
        password.style.border = "2px solid crimson";
        confirmPassword.style.border = "2px solid crimson";
    }else{
        warning.classList.remove('not-match');
        password.style.removeProperty('border');
        confirmPassword.style.removeProperty('border');
    }
}

function setup(){
    password = document.getElementById('password');
    confirmPassword = document.getElementById('confirm-password');

    password.addEventListener('input', checkMatch);
    confirmPassword.addEventListener('input', checkMatch);
}

setup();
