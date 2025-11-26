function createStep(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.1;
            if (success) {
                resolve(name);
            } else {
                reject(`Step failed: ${name}`);
            }
        }, delay);
    });
}

function takeOrder() {
    return createStep("Order taken", Math.random() * 1000 + 1000);
}

function prepare() {
    return createStep("Food prepared", Math.random() * 1000 + 1000);
}

function pack() {
    return createStep("Package ready", Math.random() * 500 + 500);
}

function dispatch() {
    return createStep("Out for delivery", Math.random() * 1000 + 1000);
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        
        const orderResult = await takeOrder();
        console.log(`Step 1: ${orderResult}`);

        const prepareResult = await prepare();
        console.log(`Step 2: ${prepareResult}`);

        const packResult = await pack();
        console.log(`Step 3: ${packResult}`);

        const dispatchResult = await dispatch();
        console.log(`Step 4: ${dispatchResult}`);
        
        console.log("Delivery completed!");

    } catch (error) {
        console.error("Pipeline failed!");
        console.error(`Reason: ${error}`);
    }
}

runPipeline();