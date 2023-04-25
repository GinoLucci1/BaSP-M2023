window.onload = function(){
    var inputValue = [];
    
    // Email Validation
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var inputE = document.querySelector('input[name ="email"');
    var inputEmailError = document.createElement('p');
    inputEmailError.classList.add("font-error");
    inputE.onblur = function(){
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
    };
    
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
    
    // function Letter validation
    function LetterCheck(letterString){
        var ascii =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for(i=0; i < letterString.length; i++){
            if( ascii.includes(letterString[i])){
                return true;
            };
        }; return false;
    };
    
    // function Number validation
    function NumberCheck(numberString){
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for(i = 0; i < numberString.length; i++){
            if (numbers.includes(numberString[i])){
                return true;
            };
        };
        return false;
    };
    
    // LogIn button validation
    var loginButton = document.getElementById('loginbtn');
        loginButton.onclick = function(e){
            e.preventDefault();
            if(inputValue.includes(inputEmail.value) &&
            inputValue.includes(inputPassword.value)){
                alert('Email: ' + inputValue[0] + '\n' + 'Password: ' + inputValue[1] );
            }
            else if (InputValue.length == 0 ){
                alert('Error! Fields are empty or must be completed correctly. Try again');
                inputEmail.onblur();
                inputPassword.onblur();
            }
            else if (!(inputValue.includes(inputEmail.value)) || !(inputValue.includes(inputPassword.value))){
                alert('Both fields must be validated');
                inputEmail.onblur();
                inputPassword.onblur();
            } else{
                alert('ERROR! Try again');
            };
        };
    };