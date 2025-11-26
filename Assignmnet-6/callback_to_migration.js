function getBugs() {
    return new Promise((resolve, reject) => {
        const API_SUCCESS = Math.random() > 0.2;

        setTimeout(() => {
            if (API_SUCCESS) {
                const bugs = ["UI glitch", "API timeout", "Login failure", "Typo error"];
                resolve(bugs);
            } else {
                reject("API Error: Failed to fetch bug list.");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Successfully fetched bugs:");
        console.table(bugs);
    })
    .catch(error => {
        console.error(`Error fetching bugs: ${error}`);
    });