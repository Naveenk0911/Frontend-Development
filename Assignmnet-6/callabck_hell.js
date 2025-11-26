function design(callback) {
    setTimeout(() => {
        console.log("Stage 1: Design complete.");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Stage 2: Build complete.");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Stage 3: Test complete.");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Stage 4: Deployment complete.");
        callback();
    }, 1000);
}

function celebrate() {
    console.log("Stage 5: Celebration time! Pipeline finished.");
}

// 1. Callback Hell Implementation
function runCallbackHell() {
    console.log("--- Running Pipeline with Callback Hell ---");
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate();
                });
            });
        });
    });
}

// 2. Async/Await Refactor
function asyncDesign() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Stage 1: Design complete.");
        resolve();
    }, 1000));
}

function asyncBuild() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Stage 2: Build complete.");
        resolve();
    }, 1000));
}

function asyncTest() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Stage 3: Test complete.");
        resolve();
    }, 1000));
}

function asyncDeploy() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Stage 4: Deployment complete.");
        resolve();
    }, 1000));
}

async function runAsyncAwaitPipeline() {
    console.log("\n--- Running Pipeline with Async/Await ---");
    try {
        await asyncDesign();
        await asyncBuild();
        await asyncTest();
        await asyncDeploy();
        celebrate();
    } catch (error) {
        console.error("Pipeline failed:", error);
    }
}

runCallbackHell();
runAsyncAwaitPipeline();

console.log("\nAsync/Await improves readability by allowing the asynchronous code structure to resemble synchronous code, avoiding nested functions.");