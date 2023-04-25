window.onload = function () {

var expression = {
    emailExpression:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

var nameI = document.getElementById ('name') ;
var lastnameI = document.getElementById ('lastname') ;
var dniY = document.getElementById ('dni') ;
var bTdate = document.getElementById ('date') ;
var phoneN = document.getElementById ('phone') ;
var addressN = document.getElementById ('address') ;
var cityT = document.getElementById ('city') ;
var postalC = document.getElementById ('postal-code') ;
var emailE = document.getElementById ('email') ;
var passwordP = document.getElementById ('password') ;
var error = document.getElementsByClassName ('')

function letterValidation(a) {
    if (typeof(a) !== 'string') {
        return false;
    }
    return a.toLowerCase() !== a.toUpperCase();
}
}
function nameValidation (word) {
    if(word.length > 3) {
        for (i=0; i < i.length; i++) {
            if(!letterValidation(word[i])) {
                return false;
            }
        }
        return true;
    }
}

    
    //  nameI.addEventListener('blur', function(event) {
    //     var x = validateName (nameI)
    //      return true;
    // });

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var inputE = document.querySelector('input[name ="email"');
    var inputEmailError = document.createElement('p');
    inputEmailError.classList.add("font-error");
    console.log ('')
    /* inputE.onblur = function()  {
        if (inputEmail.value == ''){
            console.log ('hola');
            inputEmail.classList.add("border-error");
            inputEmailError.textContent = '*Insert an email';
            inputEmail.insertAdjacentElement('afterend', inputEmailError);
        } else if (!emailExpression.test(inputEmail.value)){
            inputEmail.classList.add("border-error");
            inputEmailError.textContent = "*Insert a valid email";
            inputEmail.insertAdjacentElement('afterend', inputEmailError);
        } else{
            inputEmail.classList.add("border-correct");
            inputValue[0] = inputEmail.value;
        };
    }; */
    
    inputEmail.onfocus = function(){
        inputEmail.classList.remove("border-correct");
        inputEmail.classList.remove("border-error");
        inputEmailError.remove();
    }
    
    // Password Validation
    var inputPassword = document.getElementById('password');
    var inputPasswordError = document.createElement('p');
    inputPasswordError.classList.add('font-error');
    
    inputPassword.onblur = function(){
        if(inputPassword.value.length == ''){
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*A password is required';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if(inputPassword.value.length < 8){
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*The password must be 8 characters long';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if(!NumberCheck(inputPassword.value)){
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*The password must contain at least one number';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if (!LetterCheck(inputPassword.value)){
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*The password must contain at least one letter';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if ((LetterCheck(inputPassword.value)) && (NumberCheck(inputPassword.value))){
            inputPassword.classList.add("border-correct");
            inputValue[1] = inputPassword.value;
        };
    };
    
    inputPassword.onfocus = function(){
            inputPassword.classList.remove("border-correct");
            inputPassword.classList.remove("border-error");
            inputPasswordError.remove();
    };





