const day = 31;

switch (day) {
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
  case 31:{
    console.log("Third decade");
    break;
  }
  default:{
    console.log("Invalid data");
    break;
  }
}

/*calculator*/

function calculate(leftOperand, rightOperand, operand){
  switch(operand){
    case "+":
      console.log("Do add");
      return leftOperand + rightOperand;
    case "-":
      console.log("Do diff");
      return leftOperand - rightOperand;
    case "*":
      console.log("Do mult");
      return leftOperand * right-operand;
    case "/":
      if(rightOperand === 0){
        console.log("Divide by 0. Error!");
        return null;
      }
      console.log("Do divide");
      return leftOperand / rightOperand;
    default:
      console.log("unknow operator ", operator);
      return null;
  }
}

console.log(calculate(10, 0, "/"));