window.onload = function () {

    var nameI = document.getElementById('name');
    var lastnameI = document.getElementById('lastname');
    var dniY = document.getElementById('document');
    var bTdate = document.getElementById('birthdate');
    var phoneN = document.getElementById('phone');
    var adressN = document.getElementById('adress');
    var cityT = document.getElementById('city');
    var postalC = document.getElementById('postal-code');
    var emailE = document.getElementById('email');
    var passwordP = document.getElementById('password');
    var passR = document.getElementById('repeatPassword');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById('email');
    var inputE = document.querySelector('input[name ="email"');
    var inputEmailError = document.createElement('p');
    var form = document.querySelectorAll('div p');
    
    nameI.onblur = function () {
        if (nameI.value == '')    {
            form[0].innerText = 'campo obligatorio';
        }
    }
    nameI.onfocus = function () {
        form[0].innerText = '';
    }
    lastnameI.onblur = function () {
        if (lastnameI.value == '')    {
            console.log('esta vacio');
        }
    }
    dniY.onblur = function () {
        if (dniY.value == '')    {
            console.log('esta vacio');
        }
    }
    bTdate.onblur = function () {
        if (bTdate.value == '')    {
            console.log('esta vacio');
        }
    }
    phoneN.onblur = function () {
        if (phoneN.value == '')    {
            console.log('esta vacio');
        }
    }
    adressN.onblur = function () {
        if (adressN.value == '')    {
            console.log('esta vacio');
        }
    }
    cityT.onblur = function () {
        if (cityT.value == '')    {
            console.log('esta vacio');
        }
    }
    postalC.onblur = function () {
        if (postalC.value == '')    {
            console.log('esta vacio');
        }
    }
    emailE.onblur = function () {
        if (emailE.value == '')    {
            console.log('esta vacio');
        }
    }
    passwordP.onblur = function () {
        if (passwordP.value == '')    {
            console.log('esta vacio');
        }
    }
    passR.onblur = function () {
        if (passR.value == '')    {
            console.log('esta vacio');
        }
    }
    
    inputEmailError.classList.add("font-error");
    inputE.onblur = function () {
        if (inputEmail.value == '') {
            console.log('hola');
            inputEmail.classList.add("border-error");
            inputEmailError.textContent = '*Insert an email';
            inputEmail.insertAdjacentElement('afterend', inputEmailError);
        } else if (!emailExpression.test(inputEmail.value)) {
            inputEmail.classList.add("border-error");
            inputEmailError.textContent = "*Insert a valid email";
            inputEmail.insertAdjacentElement('afterend', inputEmailError);
        } else {
            inputEmail.classList.add("border-correct");
            inputValue[0] = inputEmail.value;
        };
    };

    inputEmail.onfocus = function () {
        inputEmail.classList.remove("border-correct");
        inputEmail.classList.remove("border-error");
        inputEmailError.remove();
    }

    // Password Validation
    var inputPassword = document.getElementById('password');
    var inputPasswordError = document.createElement('p');
    inputPasswordError.classList.add('font-error');

    inputPassword.onblur = function () {
        if (inputPassword.value.length == '') {
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*A password is required';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if (inputPassword.value.length < 8) {
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*The password must be 8 characters long';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if (!NumberCheck(inputPassword.value)) {
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*The password must contain at least one number';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if (!LetterCheck(inputPassword.value)) {
            inputPassword.classList.add("border-error");
            inputPasswordError.textContent = '*The password must contain at least one letter';
            inputPassword.insertAdjacentElement('afterend', inputPasswordError);
        } else if ((LetterCheck(inputPassword.value)) && (NumberCheck(inputPassword.value))) {
            inputPassword.classList.add("border-correct");
            inputValue[1] = inputPassword.value;
        };
    };

    inputPassword.onfocus = function () {
        inputPassword.classList.remove("border-correct");
        inputPassword.classList.remove("border-error");
        inputPasswordError.remove();
    };
    function lastNameValidation(word) {
        if (word.length > 3) {
            for (i = 0; i < i.length; i++) {
                if (!letterValidation(word[i])) {
                    return false;
                }
            }
            return true;
        }
    }
    function letterValidation(a) {
        if (typeof (a) !== 'string') {
            return false;
        }
        return a.toLowerCase() !== a.toUpperCase();
    }


    
    function nameValidation(word) {
        if (word.length > 3) {
            for (i = 0; i < i.length; i++) {
                if (!letterValidation(word[i])) {
                    return false;
                }
            }
            return true;
        }
    }
    function validationPhone(numero) {
        const soloDigitos = numero.replace(/\D/g, '');
        if (soloDigitos.length !== 10) {
            return false;
        }
        const primerDigito = soloDigitos.charAt(0);
        if (['0', '1'].includes(primerDigito)) {
            return false;
        }
        return true;
    }
    function validarCiudad(ciudad) {
        var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
        // Verificar que la ciudad contenga sólo letras y espacios
        for (let i = 0; i < ciudad.length; i++) {
            if (!letras.includes(ciudad[i])) {
                return false;
            }
        }
        return true;
    }
    function validarCodigoPostal(codigoPostal) {
        var numeros = "0123456789";
        for (let i = 0; i < codigoPostal.length; i++) {
            if (!numeros.includes(codigoPostal[i])) {
                return false;
            }
        }
        if (codigoPostal.length !== 5) {
            return false;
        }
        return true;
    }
    adressN.onblur = function () {
        var cleanADress = adressN.value.trim();
        if (cleanADress.split("").filter(function (char) { return char.indexOf(" ") != -1; }).length != 1) {
        }
    }
    // lastnameI.addEventListener('blur', lastNameValidation,)
    // postalC.addEventListener('blur', validarCodigoPostal(postalC))
    // nameI.addEventListener('blur', nameValidation)
}  


