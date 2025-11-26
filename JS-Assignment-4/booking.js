const nameRegExp = /^[A-Za-z\s]+$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seatsRegExp = /^(?:[1-9]|10)$/; 

function validateInput(name, email, seats) {
    const errors = [];
    
    if (!nameRegExp.test(name)) {
        errors.push("Name: Only alphabets allowed.");
    }

    if (!emailRegExp.test(email)) {
        errors.push("Email: Must be in a valid format (user@domain.com).");
    }

    if (!seatsRegExp.test(String(seats))) {
        errors.push("Seats: Must be between 1 and 10.");
    }
    
    return errors;
}

function processBooking(name, email, seats) {
    const validationErrors = validateInput(name, email, seats);

    if (validationErrors.length > 0) {
        console.error("Booking Failed due to Validation Errors:");
        validationErrors.forEach(err => console.error(`- ${err}`));
        return null;
    }

    const bookingInfo = {
        name: name,
        email: email,
        seats: parseInt(seats, 10) 
    };

    console.log("--- ✅ Booking Successful! ---");
    console.log("Ticket Details:");
    console.log(bookingInfo);
    
    return bookingInfo;
}

const successfulBooking = processBooking("Alice Johnson", "alice@movie.com", 3);
const failedBooking = processBooking("123 Error", "invalid-email", 11);