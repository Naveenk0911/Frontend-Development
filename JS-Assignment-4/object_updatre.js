let user = { 
    name: "John", 
    email: "john@mail.com", 
    age: 21 
};

function populateForm() {
    document.getElementById('name-field').value = user.name;
    document.getElementById('email-field').value = user.email;
    document.getElementById('age-field').value = user.age;
    displayUserObject(); 
}

function updateUserDetails(event) {
    event.preventDefault(); 

    const newName = document.getElementById('name-field').value;
    const newEmail = document.getElementById('email-field').value;
    const newAge = parseInt(document.getElementById('age-field').value, 10); 
    
    user.name = newName;
    user.email = newEmail;
    user.age = newAge;

    console.log("User Object Updated:", user);
    displayUserObject(); 
}

function displayUserObject() {
    const outputDiv = document.getElementById('user-details-output');
    outputDiv.innerHTML = `
        <h3>Updated User Details</h3>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Age:</strong> ${user.age}</p>
    `;
}

// Example calls:
// window.onload = populateForm; 
// document.getElementById('update-form').addEventListener('submit', updateUserDetails);