// Base Class
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price; // Base price
    }
}

// Subclass inheriting MovieTicket
class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    // Method to calculate total amount
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Add a method to MovieTicket.prototype
MovieTicket.prototype.printTicket = function() {
    let output = `
*** MOVIE TICKET ***
Movie: ${this.movieName}
Seat: ${this.seatNo}
Price: $${this.price.toFixed(2)}`;

    // Check if the object is an OnlineTicket instance to include fee/total
    if (this.convenienceFee !== undefined) {
        output += `
Fee:   $${this.convenienceFee.toFixed(2)}
--------------------
Total: $${this.getTotalAmount().toFixed(2)}`;
    }
    output += `
********************`;
    return output;
};

// Create an OnlineTicket object
const onlineBooking = new OnlineTicket("Dune 2", "G15", 15.00, 2.50);

console.log("\n--- Q8. Movie Ticket Booking System ---");
console.log(`Total Amount: $${onlineBooking.getTotalAmount()}`); // $17.50

// Call printTicket() using OnlineTicket objects
// This demonstrates the prototype chain: onlineBooking -> OnlineTicket.prototype -> MovieTicket.prototype (where printTicket is found).
console.log("Printing Ticket via Prototype Method:");
console.log(onlineBooking.printTicket());