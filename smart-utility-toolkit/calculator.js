const [, , operation, num1Str, num2Str] = process.argv;

const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log(
    "Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>",
  );
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = num1 + num2;
    break;
  case "subtract":
    result = num1 - num2;
    break;
  case "multiply":
    result = num1 * num2;
    break;
  case "divide":
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed.");
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(
      `Error: Invalid operation '${operation}'. Use add, subtract, multiply, or divide.`,
    );
    process.exit(1);
}

console.log(`Result: ${result}`);
