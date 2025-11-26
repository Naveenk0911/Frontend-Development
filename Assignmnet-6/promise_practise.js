function loadProfile() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

function loadPosts() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

function loadMessages() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

async function runDashboardLoader() {
    const startTime = Date.now();
    
    const promises = [
        loadProfile(),
        loadPosts(),
        loadMessages()
    ];

    try {
        const results = await Promise.allSettled(promises);
        
        console.log("--- Dashboard Module Status ---");
        
        results.forEach((result, index) => {
            const moduleName = ['Profile', 'Posts', 'Messages'][index];
            if (result.status === 'fulfilled') {
                console.log(`[SUCCESS] ${moduleName}: ${result.value}`);
            } else {
                console.error(`[FAILURE] ${moduleName}: ${result.reason}`);
            }
        });

    } catch (error) {
        console.error("An unexpected error occurred in Promise.allSettled logic.");
    } finally {
        const endTime = Date.now();
        console.log(`Total time taken: ${(endTime - startTime) / 1000} seconds`);
    }
}

runDashboardLoader();