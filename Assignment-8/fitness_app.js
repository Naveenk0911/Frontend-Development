const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            // Throw an error if dataset is empty
            throw new Error("Dataset for FitnessAnalytics cannot be empty.");
        }
        this.data = data;
    }

    // 1. getActiveUsers() → using filter()
    getActiveUsers() {
        return this.data
            .filter(user => user.steps > 7000)
            .map(user => user.user); // Return only the user name
    }

    // 2. getAverageCalories() → using reduce()
    getAverageCalories() {
        const totalCalories = this.data.reduce((sum, user) => sum + user.calories, 0);
        return totalCalories / this.data.length;
    }

    // 3. getUserSummary() → using map() to format as messages
    getUserSummary() {
        return this.data.map(user => {
            const status = user.steps > 7000 ? "Active" : "Needs to step up";
            return `User ${user.user}: ${user.steps} steps and burned ${user.calories} calories. Status: **${status}**.`;
        });
    }
}

console.log("\n--- Q9. Fitness App Analytics ---");

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("\n1. Active Users (Steps > 7000):");
    console.log(analytics.getActiveUsers()); // [ 'A', 'B' ]

    const avgCalories = analytics.getAverageCalories().toFixed(2);
    console.log(`\n2. Average Calories Burned: ${avgCalories} cal`); // 333.33

    console.log("\n3. User Summaries:");
    analytics.getUserSummary().forEach(summary => console.log(`- ${summary}`));

} catch (e) {
    console.error(`Analytics Initialization Error: ${e.message}`);
}

// Test Case for Empty Dataset Error
console.log("\nTest Case: Empty Dataset");
try {
    new FitnessAnalytics([]);
} catch (e) {
    console.error(`Analytics Initialization Error: **Handled Error:** ${e.message}`);
}