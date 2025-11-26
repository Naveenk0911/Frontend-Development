class BankAccount {
    // Private field for balance
    #balance = 0;

    constructor(initialBalance = 0) {
        if (typeof initialBalance === 'number' && initialBalance >= 0) {
            this.#balance = initialBalance;
        } else {
            console.error("Invalid initial balance. Setting to 0.");
        }
    }

    // Public method to deposit
    deposit(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return `Deposit failed: Invalid amount $${amount}`;
    }

    // Public method to withdraw (throws error if insufficient)
    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error(`Withdrawal failed: Invalid amount $${amount}`);
        }
        if (amount > this.#balance) {
            // Throw error if insufficient balance
            throw new Error(`Insufficient funds. Available: $${this.#balance}, Requested: $${amount}`);
        }
        this.#balance -= amount;
        return `Withdrew $${amount}. New balance: $${this.#balance}`;
    }

    // Public method to get balance
    getBalance() {
        return this.#balance;
    }
}

// Demonstrate
const myAccount = new BankAccount(500);

console.log("\n--- Q7. Banking Application ---");
console.log(`Initial Balance: $${myAccount.getBalance()}`);

// Valid deposits
console.log(myAccount.deposit(200)); // Deposited $200. New balance: $700

// Valid withdrawal
try {
    console.log(myAccount.withdraw(100)); // Withdrew $100. New balance: $600
} catch (e) {
    console.error(`Withdrawal Error: ${e.message}`);
}

// Invalid withdrawal (handled using try/catch)
try {
    console.log(myAccount.withdraw(1000)); // This will throw an error
} catch (e) {
    console.error(`Withdrawal Error (Insufficient Funds): **Handled Error:** ${e.message}`);
}