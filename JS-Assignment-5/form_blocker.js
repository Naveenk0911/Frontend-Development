document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const successMessage = document.getElementById('success-message');

    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    function validateField(input, validationFn, errorMsg) {
        const errorMessage = validationFn(input.value);
        const errorElement = document.getElementById(input.id + '-error');
        
        errorElement.textContent = errorMessage;
        input.classList.toggle('invalid', errorMessage !== '');
        
        return errorMessage === '';
    }

    // Validation functions
    const checkName = (value) => value.trim() ? '' : 'Name is required.';
    const checkEmail = (value) => emailRegExp.test(value) ? '' : 'Email is required and must contain @.';
    const checkPassword = (value) => value.length >= 6 ? '' : 'Password must be at least 6 characters.';

    function handleFormSubmit(event) {
        let isNameValid = validateField(nameInput, checkName, 'Name is required.');
        let isEmailValid = validateField(emailInput, checkEmail, 'Email is required and must contain @.');
        let isPasswordValid = validateField(passwordInput, checkPassword, 'Password must be at least 6 characters.');

        if (!isNameValid || !isEmailValid || !isPasswordValid) {
            // Stop form submission if any field is invalid
            event.preventDefault(); 
            successMessage.style.display = 'none';
        } else {
            // Prevent default submission anyway, but simulate success
            event.preventDefault(); 
            form.reset(); 
            
            // Hide errors and show success message
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            nameInput.classList.remove('invalid');
            emailInput.classList.remove('invalid');
            passwordInput.classList.remove('invalid');

            successMessage.textContent = 'Form Submitted Successfully!';
            successMessage.style.display = 'block';
        }
    }

    // Live error checking
    nameInput.addEventListener('input', () => validateField(nameInput, checkName, ''));
    emailInput.addEventListener('input', () => validateField(emailInput, checkEmail, ''));
    passwordInput.addEventListener('input', () => validateField(passwordInput, checkPassword, ''));

    form.addEventListener('submit', handleFormSubmit);
});