const nameRegExp = /^[A-Za-z\s]+$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const phoneRegExp = /^\d{10}$/;
const passwordRegExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/; 

function validateField(fieldId, regExp, errorMessage) {
    const field = document.getElementById(fieldId);
    const value = field.value;
    const errorElement = document.getElementById(fieldId + '-error');

    if (!regExp.test(value)) {
        field.style.border = '2px solid red';
        errorElement.textContent = errorMessage;
        errorElement.style.color = 'red';
        return false;
    } else {
        field.style.border = '2px solid green';
        errorElement.textContent = 'Valid!';
        errorElement.style.color = 'green';
        return true;
    }
}

function validateForm() {
    let isValid = true;
    
    isValid &= validateField('name', nameRegExp, 'Name must contain only alphabets.');
    isValid &= validateField('email', emailRegExp, 'Email must be in a valid format (e.g., user@domain.com).');
    isValid &= validateField('phone', phoneRegExp, 'Phone must be exactly 10 digits.');
    isValid &= validateField('password', passwordRegExp, 'Password must have 1 uppercase, 1 number, and 1 special character (min 8 chars).');

    return isValid; 
}