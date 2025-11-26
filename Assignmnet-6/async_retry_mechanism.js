function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; 
        
        setTimeout(() => {
            if (success) {
                resolve("Order submitted successfully.");
            } else {
                reject("API error: Server failed to process order.");
            }
        }, 500);
    });
}

async function processOrder() {
    const MAX_RETRIES = 3;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Submitting order...`);
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success - ${result}`);
            return result;
        } catch (error) {
            console.warn(`Attempt ${attempt}: Failed - ${error}`);
            if (attempt === MAX_RETRIES) {
                throw new Error("Order could not be processed after multiple retries.");
            }
        }
    }
}

async function runOrderProcessor() {
    try {
        await processOrder();
        console.log("Final status: Order process finished.");
    } catch (finalError) {
        console.error(`Final status: ${finalError.message}`);
    }
}

runOrderProcessor();