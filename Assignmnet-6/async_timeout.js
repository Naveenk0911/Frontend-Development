function serverA() {
    return new Promise((resolve, reject) => {
        const delay = 2000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Server A finished deployment (2s)");
            } else {
                reject("Server A failed during deployment.");
            }
        }, delay);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        const delay = 3000;
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Server B finished deployment (3s)");
            } else {
                reject("Server B failed during deployment.");
            }
        }, delay);
    });
}

function manageDeployment() {
    const deployments = [serverA(), serverB()];

    Promise.all(deployments)
        .then(results => {
            console.log("Deployment completed for all servers:");
            console.log(results);
        })
        .catch(error => {
            console.error(`Promise.all failed: One or more deployments failed: ${error}`);
        });

    Promise.race(deployments)
        .then(fastestResult => {
            console.log("Fastest response:");
            console.log(fastestResult);
        })
        .catch(error => {
            console.error(`Promise.race failed: The first response was an error: ${error}`);
        });
}

manageDeployment();