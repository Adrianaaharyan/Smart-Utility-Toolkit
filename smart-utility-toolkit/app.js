const isEven = require("./modules/isEven");
const { log } = require("./modules/logger");

log("Testing custom modules...");

const testNumbers = [4, 7, 12, 15];

testNumbers.forEach((num) => {
  const result = isEven(num);
  log(`Is ${num} even? -> ${result}`);
});
