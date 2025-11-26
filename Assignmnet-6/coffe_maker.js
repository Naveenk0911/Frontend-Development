function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log("Step 1: Water is boiling.");
                resolve("Boiled Water");
            } else {
                reject("Boiling failed: Kettle malfunctioned.");
            }
        }, delay);
    });
}

function brewCoffee(water) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log(`Step 2: Brewing coffee with ${water}.`);
                resolve("Freshly Brewed Coffee");
            } else {
                reject("Brewing failed: Ran out of grounds.");
            }
        }, delay);
    });
}

function pourCoffee(coffee) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 1000;
        setTimeout(() => {
            console.log(`Step 3: Pouring ${coffee} into cup.`);
            resolve();
        }, delay);
    });
}

function makeCoffee() {
    boilWater()
        .then(water => brewCoffee(water))
        .then(coffee => pourCoffee(coffee))
        .then(() => {
            console.log("Coffee ready for the team!");
        })
        .catch(error => {
            console.error(`Coffee preparation failed: ${error}`);
        });
}

makeCoffee();