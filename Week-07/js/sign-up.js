/* --> WEEK 06 <-- */

window.onload = function () {
    var InputValue = [];

    // function Letter validation
    function LetterCheck(letterString) {
        var ascii = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        for (i = 0; i < letterString.length; i++) {
            if (ascii.includes(letterString[i])) {
                return true;
            };
        }; return false;
    };


    // Number validation
    function NumberCheck(numberString) {
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (i = 0; i < numberString.length; i++) {
            if ((numbers.includes(numberString[i]))) {
                return true;
            };
        };
        return false;
    };

    // function EXCLUSIVE Number validation
    function ExclusiveNumberCheck(numberString) {
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (i = 0; i < numberString.length; i++) {
            if (!(numbers.includes(numberString[i]))) {
                return false;
            };
        };
        return true;
    };

    // function EXCLUSIVE Letter validation
    function ExclusiveLetterCheck(letterString) {
        var ascii = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (i = 0; i < letterString.length; i++) {
            if (!(ascii.includes(letterString[i]))) {
                return false;
            };
        }; return true;
    };

    // function to detect at least 4 letters
    function CityValidation(citystring) {
        Letra = citystring.length;
        var Validation = false;
        var num = 0
        var i = 0
        var ascii = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        while (i < Letra && num < 4) {
            for (var j = 0; j < ascii.length; j++) {
                if (citystring[i] == ascii[j]) {
                    num++
                }
            }
            i++;
        }
        if (num === 4) {
            Validation = true;
        } return Validation;
    };

    function SpaceDetecter(string) {
        for (i = 1; i < string.length; i++) {
            if (string.indexOf(" ") === -1) {
                return false;
            }
        } return true;
    };

    // Name Validation
    var InputName = document.getElementById('name');
    var InputNameError = document.createElement('p');
    InputNameError.classList.add("font-error");

    InputName.onblur = function () {
        if (InputName.value == '') {
            InputName.classList.add("border-error");
            InputNameError.textContent = 'Insert a name';
            InputName.insertAdjacentElement('afterend', InputNameError);
        } else if (!ExclusiveLetterCheck(InputName.value)) {
            InputName.classList.add("border-error");
            InputNameError.textContent = 'Name can only contain letters';
            InputName.insertAdjacentElement('afterend', InputNameError);
        } else if (InputName.value.length < 3) {
            InputName.classList.add("border-error");
            InputNameError.textContent = 'Name must have at least 3 words';
            InputName.insertAdjacentElement('afterend', InputNameError);
        } else if (ExclusiveLetterCheck(InputName.value.length)) {
            InputName.classList.add("border-correct");
            InputValue[0] = InputName.value;
        };
    };

    InputName.onfocus = function () {
        InputName.classList.remove("border-correct");
        InputName.classList.remove("border-error");
        InputNameError.remove();
    };

    // Surname Validation
    var InputSurname = document.getElementById('lastname');
    var InputSurnameError = document.createElement('p');
    InputSurnameError.classList.add("font-error");

    InputSurname.onblur = function () {
        if (InputSurname.value == '') {
            InputSurname.classList.add("border-error");
            InputSurnameError.textContent = 'Insert a Surname';
            InputSurname.insertAdjacentElement('afterend', InputSurnameError);
        } else if (!ExclusiveLetterCheck(InputSurname.value)) {
            InputSurname.classList.add("border-error");
            InputSurnameError.textContent = 'Surname can only contain letters';
            InputSurname.insertAdjacentElement('afterend', InputSurnameError);
        } else if (InputSurname.value.length < 3) {
            InputSurname.classList.add("border-error");
            InputSurnameError.textContent = 'Surname must have at least 3 words';
            InputSurname.insertAdjacentElement('afterend', InputSurnameError);
        } else if (ExclusiveLetterCheck(InputSurname.value.length)) {
            InputSurname.classList.add("border-correct");
            InputValue[1] = InputSurname.value;
        };
    };

    InputSurname.onfocus = function () {
        InputSurname.classList.remove("border-correct");
        InputSurname.classList.remove("border-error");
        InputSurnameError.remove();
    };

    // Email Validation
    var InputEmail = document.getElementById('email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var InputEmailError = document.createElement('p');
    InputEmailError.classList.add("font-error");

    InputEmail.onblur = function () {
        if (InputEmail.value == '') {
            InputEmail.classList.add("border-error");
            InputEmailError.textContent = '*Insert an email';
            InputEmail.insertAdjacentElement('afterend', InputEmailError);
        } else if (!emailExpression.test(InputEmail.value)) {
            InputEmail.classList.add("border-error");
            InputEmailError.textContent = "*Insert a valid email";
            InputEmail.insertAdjacentElement('afterend', InputEmailError);
        } else {
            InputEmail.classList.add("border-correct");
            InputValue[2] = InputEmail.value;
        };
    };
    InputEmail.onfocus = function () {
        InputEmail.classList.remove("border-correct");
        InputEmail.classList.remove("border-error");
        InputEmailError.remove();
    };

    // Phone Number Validation
    var InputPhone = document.getElementById('phone');
    var InputPhoneError = document.createElement('p');
    InputPhoneError.classList.add("font-error");

    InputPhone.onblur = function () {
        if (InputPhone.value == '') {
            InputPhone.classList.add("border-error");
            InputPhoneError.textContent = '*Insert a Phone Number';
            InputPhone.insertAdjacentElement('afterend', InputPhoneError);
        } else if (!ExclusiveNumberCheck(InputPhone.value)) {
            InputPhone.classList.add("border-error");
            InputPhoneError.textContent = '*Phone numbers must contain only numbers';
            InputPhone.insertAdjacentElement('afterend', InputPhoneError);
        } else if (InputPhone.value.length < 10 || InputPhone.value.length > 10) {
            InputPhone.classList.add("border-error");
            InputPhoneError.textContent = '*Phone Number must be 10 digits long';
            InputPhone.insertAdjacentElement('afterend', InputPhoneError);
        } else if (ExclusiveNumberCheck(InputPhone.value) && (InputPhone.value.length == 10)) {
            InputPhone.classList.add("border-correct");
            InputValue[3] = InputPhone.value;
        };
    };
    InputPhone.onfocus = function () {
        InputPhone.classList.remove("border-correct");
        InputPhone.classList.remove("border-error");
        InputPhoneError.remove();
    };

    // Password Validation
    var InputPassword = document.getElementById('password');
    var InputPasswordError = document.createElement('p');
    InputPasswordError.classList.add('font-error');

    InputPassword.onblur = function () {
        if (InputPassword.value.length == '') {
            InputPassword.classList.add("border-error");
            InputPasswordError.textContent = '*A password is required';
            InputPassword.insertAdjacentElement('afterend', InputPasswordError);
        } else if (InputPassword.value.length < 8) {
            InputPassword.classList.add("border-error");
            InputPasswordError.textContent = '*The password must be 8 characters long';
            InputPassword.insertAdjacentElement('afterend', InputPasswordError);
        } else if (!NumberCheck(InputPassword.value)) {
            InputPassword.classList.add("border-error");
            InputPasswordError.textContent = '*The password must contain at least one number';
            InputPassword.insertAdjacentElement('afterend', InputPasswordError);
        } else if (!LetterCheck(InputPassword.value)) {
            InputPassword.classList.add("border-error");
            InputPasswordError.textContent = '*The password must contain at least one letter';
            InputPassword.insertAdjacentElement('afterend', InputPasswordError);
        } else if ((LetterCheck(InputPassword.value)) && (NumberCheck(InputPassword.value))) {
            InputPassword.classList.add("border-correct");
            InputValue[4] = InputPassword.value;
        };
    };
    InputPassword.onfocus = function () {
        InputPassword.classList.remove("border-correct");
        InputPassword.classList.remove("border-error");
        InputPasswordError.remove();
    };

    // Confirm Password Validation
    var InputConfirmPassword = document.getElementById('repeatPassword');
    var InputConfirmPasswordError = document.createElement('p');
    InputConfirmPasswordError.classList.add('font-error');

    InputConfirmPassword.onblur = function () {
        if (InputConfirmPassword.value.length == 0) {
            InputConfirmPassword.classList.add("border-error");
            InputConfirmPasswordError.textContent = '*This field can not be empty';
            InputConfirmPassword.insertAdjacentElement('afterend', InputConfirmPasswordError);
        } else if (InputConfirmPassword.value === InputPassword.value) {
            InputConfirmPassword.classList.add("border-correct");
            InputValue[5] = InputConfirmPassword.value;
        } else {
            InputConfirmPassword.classList.add("border-error");
            InputConfirmPasswordError.textContent = '*The password must be the same';
            InputConfirmPassword.insertAdjacentElement('afterend', InputConfirmPasswordError);
        };
    };
    InputConfirmPassword.onfocus = function () {
        InputConfirmPassword.classList.remove("border-correct");
        InputConfirmPassword.classList.remove("border-error");
        InputConfirmPasswordError.remove();
    };

    // Birth Date validation
    var InputBirthDate = document.getElementById('birthdate');
    var InputBirthDateError = document.createElement('p');
    InputBirthDateError.classList.add("font-error");

    InputBirthDate.onblur = function () {
        if (InputBirthDate.value == '') {
            InputBirthDate.classList.add("border-error");
            InputBirthDateError.textContent = 'Error';
            InputBirthDate.insertAdjacentElement('afterend', InputBirthDateError);
        } else {
            InputBirthDate.classList.add("border-correct");
            InputValue[6] = InputBirthDate.value;
        };
    };
    InputBirthDate.onfocus = function () {
        InputBirthDate.classList.remove("border-correct");
        InputBirthDate.classList.remove("border-error");
        InputBirthDateError.remove();
    }


    // DNI Validation
    var InputDNI = document.getElementById('document');
    var InputDNIError = document.createElement('p');
    InputDNIError.classList.add("font-error");

    InputDNI.onblur = function () {
        if (InputDNI.value == '') {
            InputDNI.classList.add("border-error");
            InputDNIError.textContent = '*Insert DNI';
            InputDNI.insertAdjacentElement('afterend', InputDNIError);
        } else if (!ExclusiveNumberCheck(InputDNI.value)) {
            InputDNI.classList.add("border-error");
            InputDNIError.textContent = '*DNI must contain only numbers';
            InputDNI.insertAdjacentElement('afterend', InputDNIError);
        } else if (InputDNI.value.length < 7) {
            InputDNI.classList.add("border-error");
            InputDNIError.textContent = '*DNI must contain at least 7 digits';
            InputDNI.insertAdjacentElement('afterend', InputDNIError);
        } else if (ExclusiveNumberCheck(InputDNI.value) && (InputDNI.value.length >= 7)) {
            InputDNI.classList.add("border-correct");
            InputValue[7] = InputDNI.value;
        };
    };
    InputDNI.onfocus = function () {
        InputDNI.classList.remove("border-correct");
        InputDNI.classList.remove("border-error");
        InputDNIError.remove();
    };

    // Localidad Validation
    var InputCity = document.getElementById('city');
    var InputCityError = document.createElement('p');
    InputCityError.classList.add("font-error");

    InputCity.onblur = function () {
        if (InputCity.value.length == '') {
            InputCity.classList.add("border-error");
            InputCityError.textContent = '*Insert City name';
            InputCity.insertAdjacentElement('afterend', InputCityError);
        } else if (InputCity.value.length < 3) {
            InputCity.classList.add("border-error");
            InputCityError.textContent = '*City name must have at least 4 letters';
            InputCity.insertAdjacentElement('afterend', InputCityError);
        } else if (!CityValidation(InputCity.value)) {
            InputCity.classList.add("border-error");
            InputCityError.textContent = '*City name must have at least 4 letters';
            InputCity.insertAdjacentElement('afterend', InputCityError)
        }
        else if (CityValidation(InputCity.value)) {
            InputCity.classList.add("border-correct");
            InputValue[8] = InputCity.value;
        } else {
            InputCity.classList.add("border-error");
            InputCityError.textContent = '*ERROR';
            InputCity.insertAdjacentElement('afterend', InputCityError)
        }
    };
    InputCity.onfocus = function () {
        InputCity.classList.remove("border-correct");
        InputCity.classList.remove("border-error");
        InputCityError.remove();
    };

    // Address Validation
    var InputAddress = document.getElementById('adress');
    var InputAddressError = document.createElement('p');
    InputAddressError.classList.add("font-error");

    InputAddress.onblur = function () {
        if (InputAddress.value.length == '') {
            InputAddress.classList.add("border-error");
            InputAddressError.textContent = "*Insert Address";
            InputAddress.insertAdjacentElement('afterend', InputAddressError);
        } else if (InputAddress.value.length < 5) {
            InputAddress.classList.add("border-error");
            InputAddressError.textContent = "*Address must contain at least 5 characters";
            InputAddress.insertAdjacentElement('afterend', InputAddressError);
        } else if (SpaceDetecter(InputAddress.value) && (NumberCheck(InputAddress.value) && LetterCheck(InputAddress.value))) {
            InputAddress.classList.add("border-correct");
            InputValue[9] = InputAddress.value;
        } else {
            InputAddress.classList.add("border-error");
            InputAddressError.textContent = "*error";
            InputAddress.insertAdjacentElement('afterend', InputAddressError);
        };
    };

    InputAddress.onfocus = function () {
        InputAddress.classList.remove("border-correct");
        InputAddress.classList.remove("border-error");
        InputAddressError.remove();
    }


    // Postal Code Validaiton
    InputPostal = document.getElementById('postalcode');
    InputPostalError = document.createElement('p');
    InputPostalError.classList.add("font-error");

    InputPostal.onblur = function () {
        if (InputPostal.value.length == '') {
            InputPostal.classList.add("border-error");
            InputPostalError.textContent = "*Insert Postal Code";
            InputPostal.insertAdjacentElement('afterend', InputPostalError);
        } else if (!ExclusiveNumberCheck(InputPostal.value)) {
            InputPostal.classList.add("border-error");
            InputPostalError.textContent = "*Postal Code must contain only numbers";
            InputPostal.insertAdjacentElement('afterend', InputPostalError);
        } else if (InputPostal.value.length < 4 || InputPostal.value.length > 5) {
            InputPostal.classList.add("border-error");
            InputPostalError.textContent = "*Postal Code must contain 4 or 5 numbers";
            InputPostal.insertAdjacentElement('afterend', InputPostalError);
        } else {
            InputPostal.classList.add("border-correct");
            InputValue[10] = InputPostal.value
        }
    }
    InputPostal.onfocus = function () {
        InputPostal.classList.remove("border-correct");
        InputPostal.classList.remove("border-error");
        InputPostalError.remove();
    };


    // Create Button Validation-
    var CreateButton = document.getElementById('signUp');
    CreateButton.onclick = function (e) {
        urlsign = "https://api-rest-server.vercel.app/signup?" +
    "name=" +
    InputName.value +
    "&lastName=" +
    InputSurname.value +
    "&dni=" +
    InputDNI.value +
    "&dob=" +
    InputBirthDate.value +
    "&phone=" +
    InputPhone.value +
    "&address=" +
    InputAddress.value +
    "&zip=" +
    InputPostal.value +
    "&city=" +
    InputCity.value +
    "&email=" +
    InputEmail.value +
    "&password=" +
    InputPassword.value +
    "&password=" +
    InputConfirmPassword.value;
        e.preventDefault();
        if (InputValue.includes(InputName.value) &&
            InputValue.includes(InputSurname.value) &&
            InputValue.includes(InputEmail.value) &&
            InputValue.includes(InputPhone.value) &&
            InputValue.includes(InputPassword.value) &&
            InputValue.includes(InputConfirmPassword.value) &&
            InputValue.includes(InputBirthDate.value) &&
            InputValue.includes(InputDNI.value) &&
            InputValue.includes(InputCity.value) &&
            InputValue.includes(InputAddress.value) &&
            InputValue.includes(InputPostal.value)) {
                fetch (urlsign)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.success) {
                        alert('Server Response: \n' + 'Success: ' + data.success + '\n' + 'Message: ' + data.msg)
                        localStorage.setItem('name', InputName.value);
                        localStorage.setItem('lastname', InputSurName.value);
                        localStorage.setItem('email', InputEmail.value);
                        localStorage.setItem('phone', InputPhone.value);
                        localStorage.setItem('password', InputPassword.value);
                        localStorage.setItem('confirmPassword', InputConfirmPassword.value);
                        localStorage.setItem('birthdate', InputBirthDate.value);
                        localStorage.setItem('dni', InputDNI.value);
                        localStorage.setItem('city', InputCity.value);
                        localStorage.setItem('address', InputAddress.value);
                        localStorage.setItem('postalcode', InputPostal.value);
                    } else {
                        throw data;
                    }
                })
                .catch(function (error) {
                    alert('Server Response: ERROR! \n' + 'Success: ' + error.success + '\n' + 'Message: ' + error.msg);
                })
                alert(
                'Account Created Successfully' + '\n' +
                'Name: ' + InputValue[0] + '\n' +
                'Surname: ' + InputValue[1] + '\n' +
                'Email: ' + InputValue[2] + '\n' +
                'Phone Number: ' + InputValue[3] + '\n' +
                'Password: ' + InputValue[4] + '\n' +
                'Confirmed Password: ' + InputValue[5] + '\n' +
                'Birth Date: ' + InputValue[6] + '\n' +
                'DNI: ' + InputValue[7] + '\n' +
                'City: ' + InputValue[8] + '\n' +
                'Address: ' + InputValue[9] + '\n' +
                'Postal Code: ' + InputValue[10] + '\n'
            );
        } else if (InputValue.length == 0) {
            alert('Fields are empty. Try again');
            InputName.onblur();
            InputSurname.onblur();
            InputEmail.onblur();
            InputPhone.onblur();
            InputPassword.onblur();
            InputConfirmPassword.onblur();
            InputBirthDate.onblur();
            InputDNI.onblur();
            InputCity.onblur();
            InputAddress.onblur();
            InputPostal.onblur();
        } else {
            alert('ERROR! All fields must be completed correctly');
            InputName.onblur();
            InputSurname.onblur();
            InputEmail.onblur();
            InputPhone.onblur();
            InputPassword.onblur();
            InputConfirmPassword.onblur();
            InputBirthDate.onblur();
            InputDNI.onblur();
            InputCity.onblur();
            InputAddress.onblur();
            InputPostal.onblur();
        };
    };

/* --> WEEK 07 <-- */
function getLocalStorage() {
    InputName.value = localStorage.getItem('name');
    InputSurname.value = localStorage.getItem('lastname');
    InputEmail.value = localStorage.getItem('email');
    InputPhone.value = localStorage.getItem('phone');
    InputPassword.value = localStorage.getItem('password');
    InputConfirmPassword.value = localStorage.getItem('password');
    InputBirthDate.value = birthDateDMY(localStorage.getItem('birthdate'));
    InputDNI.value = localStorage.getItem('dni');
    InputCity.value = localStorage.getItem('city');
    InputAddress.value = localStorage.getItem('address');
    InputPostal.value = localStorage.getItem('postalcode');
}

if (localStorage.length != 0) {
    getLocalStorage()
};

/*  + queryParams */
/* function promiseSignUp(queryParams) {
    var queryParams = 'name=' + inputName.value +
        '&lastName=' + inputSurname.value +
        '&email=' + inputEmail.value +
        '&phone=' + inputPhone.value +
        '&password=' + inputPassword.value +
        '&dob=' + birthDateMDY(inputBirthDate.value) +
        '&dni=' + inputDNI.value +
        '&city=' + inputCity.value +
        '&address=' + inputAddress.value +
        '&zip=' + inputPostal.value; */
        
};

