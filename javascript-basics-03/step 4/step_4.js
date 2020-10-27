var myPassword = document.getElementById('password');
var confirmPassword = document.getElementById('confirmation');
var mybtn = document.querySelector('button');

function validatePassword(){
    if (myPassword.value != confirmPassword.value){
        myPassword.style.border = "red 2px solid";
        confirmPassword.style.border = "red 2px solid";
    }
}

mybtn.addEventListener("click", validatePassword);