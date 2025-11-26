const usernameRegExp = /.{5,}/; 
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/; 

function validateLoginForm(username, password) {
    let errorMessage = '';

    if (!usernameRegExp.test(username)) {
        errorMessage = "Username must be at least 5 characters long.";
    } 
    else if (!passwordRegExp.test(password)) {
        errorMessage = "Password must be at least 8 characters and include: 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    }

    const successDiv = document.getElementById('success-message');
    const errorDiv = document.getElementById('error-message');

    if (errorMessage) {
        errorDiv.textContent = `❌ Login Failed: ${errorMessage}`;
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
        return false;
    } else {
        successDiv.textContent = "✅ Login Successful!";
        successDiv.style.display = 'block';
        errorDiv.style.display = 'none';
        return true;
    }
}