const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

function rollDice() {
  return crypto.randomInt(1, 7);
}

// Single Roll Demonstration
const result = rollDice();
console.log(`Dice Rolled: ${result}`);

// Multiple Rolls Simulation
console.log("\nSimulating 5 Dice Rolls:");
const historyPath = path.join(__dirname, "dice_history.txt");

for (let i = 1; i <= 5; i++) {
  const roll = rollDice();
  const logEntry = `Roll ${i}: ${roll}\n`;
  console.log(`Roll ${i}: ${roll}`);

  // Bonus Challenge: Store dice roll history in a text file
  fs.appendFileSync(historyPath, logEntry);
}

console.log("\nDice rolls saved to dice_history.txt");
