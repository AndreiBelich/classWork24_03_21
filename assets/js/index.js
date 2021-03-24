/*Task 1 variant 1*/
/**
 * 
 * @param {number} day - it's number from 1 to 31
 */
function calculateDecade(day) {
  const decade = Math.floor((day - 1) / 10);
  switch (decade) {
    case 0:
      console.log(`Day ${day} belongs first decade`);
      break;
    case 1:
      console.log(`Day ${day} belongs second decade`);
      break;
    case 2:
    case 3:
      console.log(`Day ${day} belongs third decade`);
      break;
    default:
      console.log(`Unknown date`);
      break;
  }
}
const day = 31;
const favoriteDay = 17;

for (let i = 1; i <= day; i++) {
  calculateDecade(i);
}

/*Task 1 variant 2*/
switch (favoriteDay) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10: {
    console.log("First decade");
    break;
  }
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20: {
    console.log("Second decade");
    break;
  }
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
  case 31: {
    console.log("Third decade");
    break;
  }
  default: {
    console.log("Invalid data");
    break;
  }
}

/*Task 2*/
/**
 * 
 * @param {number} leftOperand 
 * @param {number} rightOperand 
 * @param {string} operand 
 * @returns {number | null}
 */
function calculate(leftOperand, rightOperand, operand) {
  switch (operand) {
    case "+":
      console.log("Do add");
      return leftOperand + rightOperand;
    case "-":
      console.log("Do diff");
      return leftOperand - rightOperand;
    case "*":
      console.log("Do mult");
      return leftOperand * rightOperand;
    case "/":
      if (rightOperand === 0) {
        console.log("Divide by 0. Return Infinity!");
      }else{
        console.log("Do divide");
      }
      return leftOperand / rightOperand;
    default:
      console.log("unknown operator ", operand);
      return null;
  }
}

const leftValue = +prompt("Enter left value: ");
const operand = prompt("Enter operand: ");
const rightValue = +prompt("Enter right value: ");
if(!isNaN(leftValue - rightValue)){
  console.log( calculate(leftValue, rightValue, operand) );
}else{
  console.log("Invalid number");
}