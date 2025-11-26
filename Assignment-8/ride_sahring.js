class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleModel, licensePlate) {
        super(name, rating);
        this.vehicleModel = vehicleModel;
        this.licensePlate = licensePlate;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Method to calculate fare
    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            // Throw an error if distance is not provided
            throw new Error("Trip distance must be provided.");
        }
        if (typeof this.distance !== 'number' || this.distance < 0) {
            // Throw an error if distance is negative
            throw new Error(`Invalid distance value: ${this.distance}. Distance must be a positive number.`);
        }

        const BASE_FARE = 5.00;
        const COST_PER_KM = 1.50;
        const fare = BASE_FARE + (this.distance * COST_PER_KM);
        return parseFloat(fare.toFixed(2));
    }
}

// Test Scenarios
console.log("\n--- Q5. Ride-Sharing Application ---");

// Scenario 1: Valid Trip
const validTrip = new Trip("A", "B", 10.5);
try {
    const fare = validTrip.calculateFare();
    console.log(`Trip (10.5 km) Fare: $${fare}`); // $20.75
} catch (e) {
    console.error(`Error (Valid Trip): ${e.message}`);
}

// Scenario 2: Invalid Distance (Negative)
const negativeDistanceTrip = new Trip("C", "D", -5);
try {
    negativeDistanceTrip.calculateFare();
} catch (e) {
    console.error(`Error (Negative Distance): **Handled Error:** ${e.message}`);
}

// Scenario 3: Missing Distance
const missingDistanceTrip = new Trip("E", "F", null);
try {
    missingDistanceTrip.calculateFare();
} catch (e) {
    console.error(`Error (Missing Distance): **Handled Error:** ${e.message}`);
}