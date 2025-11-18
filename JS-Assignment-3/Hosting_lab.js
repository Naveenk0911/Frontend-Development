console.log("--- Q5: Hoisting Lab ---");

console.log("--- Fixed Code Output ---");
function announce() { console.log("Game started"); }
function startGame() {
    console.log(status); 
}
var score = 50;
let status = "ready";

console.log(score);
announce();
startGame();



console.log("\n--- Arrow Function Rewrites (No Hoisting) ---");
const arrowAnnounce = () => { console.log("Game started (Arrow)"); };
const arrowStartGame = () => { console.log(arrowStatus); };

let arrowScore = 500;
let arrowStatus = "ready (Arrow)";

console.log(arrowScore);
arrowAnnounce();
arrowStartGame();

console.log("--------------------------------------");