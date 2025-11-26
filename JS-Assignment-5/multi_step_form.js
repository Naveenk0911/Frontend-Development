document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multi-step-form');
    const steps = [
        { id: 'step-1', validate: validateName },
        { id: 'step-2', validate: validateEmail },
        { id: 'step-3', validate: validatePassword }
    ];
    let currentStep = 0;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const summaryDiv = document.getElementById('summary');

    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    function validateName(value) {
        return value.trim().length > 2 ? '' : 'Name must be at least 3 characters.';
    }

    function validateEmail(value) {
        return emailRegExp.test(value) ? '' : 'Invalid email format.';
    }

    function validatePassword(value) {
        return value.length >= 6 ? '' : 'Password must be at least 6 characters.';
    }

    function showStep(index) {
        steps.forEach((step, i) => {
            const element = document.getElementById(step.id);
            element.style.display = i === index ? 'block' : 'none';
        });

        // Update button visibility
        document.getElementById('back-btn').style.display = index > 0 ? 'inline-block' : 'none';
        document.getElementById('next-btn').textContent = index === steps.length - 1 ? 'Finish' : 'Next';
    }

    function updateError(inputElement, errorMessage) {
        const errorElement = document.getElementById(inputElement.id + '-error');
        errorElement.textContent = errorMessage;
        inputElement.classList.toggle('invalid', errorMessage !== '');
    }

    function handleNext() {
        const currentStepData = steps[currentStep];
        const inputElement = document.getElementById(currentStepData.id).querySelector('input');
        const validationFn = currentStepData.validate;
        const errorMessage = validationFn(inputElement.value);

        if (errorMessage) {
            updateError(inputElement, errorMessage);
            return;
        } else {
            updateError(inputElement, ''); 
        }

        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            showSummary();
        }
    }

    function handleBack() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    function showSummary() {
        form.style.display = 'none';
        summaryDiv.style.display = 'block';
        summaryDiv.innerHTML = `
            <h2>Form Submitted Successfully!</h2>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Password:</strong> ********</p>
            <button onclick="window.location.reload()">Start Over</button>
        `;
    }

    document.getElementById('next-btn').addEventListener('click', handleNext);
    document.getElementById('back-btn').addEventListener('click', handleBack);

    // Live validation for better UX
    nameInput.addEventListener('input', () => updateError(nameInput, validateName(nameInput.value)));
    emailInput.addEventListener('input', () => updateError(emailInput, validateEmail(emailInput.value)));
    passwordInput.addEventListener('input', () => updateError(passwordInput, validatePassword(passwordInput.value)));

    showStep(currentStep); 
});