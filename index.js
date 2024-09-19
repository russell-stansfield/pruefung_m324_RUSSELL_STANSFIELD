const myUnusedVariable = 0;
if ('2' === 2) {
  console.log(myUnusedVariable);
}
const chalk = require('chalk');
console.log(chalk.blue('It works'));

function calculate(a, b, operation) {
    if (operation === "add") {
      return a + b;
    } else if (operation === "subtract") {
      return a - b;
    } else {
      return "error wrong operation";
    }
  }
  