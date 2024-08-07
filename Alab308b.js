// Conditional statements
let z= 2;

if(z>=2)
{
  console.log("yay,I'm less than 2")
}
else{
  console.log("no, I'm not less than 2")
}

// Nested if

Age =15;

if(Age>=18)
{

console.log("Access Granted")
}
else{
  console.log("Access denied")
}

// Nested if statement

// let score = prompt("Please enter your score" )
// if(score>=90){
//   console.log("A") }
// // we don't need two operators which may increase the time complexity of the code. Beacuse when ever we write the code, if the condition is satisified or true the cusor or the flow will out of the scope of the conditional statement( meaning the scope within else if) so, score>=80 is sufficient, instead of two opeartors, this is a coder or developer points to remember,how to write the code!

//   else if(score>=80 ){

// console.log("B")
// }
//   else if(score>=70){
// console.log("c")
// }
// else if(score>=60 ){
// console.log("D")
// }
// else if(score>=55 ){
// console.log("E")
// }
// else {
//   console.log("F")
// }

// let num = prompt("Please enter the number")

// if(num>100 && num>0){
//   console.log("The given number is positive and greater than 100")

// }
//  else if(num<100)
//   console.log( "The given number is positive and lesser than 100")
// else{
//   console.log("The given number is negative")
// }
// switches are very specific to use and if you want to act the same thing for same opertion again with different cases or situations and examples like  https://stackoverflow.com/questions/6513585/test-for-multiple-cases-in-a-switch-like-an-or



//   let x = 5;
//   let y = 4;
//   let operand = "*";
//   switch (operand) {
//      case "+":
//          console.log(x + y);
//          break;
//      case "-":
//          console.log(x - y);
//          break;
//      case "*":
//          console.log(x * y);
//          break
//      case "/":
//          console.log(x / y);
//          break;
//      default:
//          console.log("Invalid Operand")
//          break;
//   }

  // Ternary Operatos: These are very important and we can write them in one line (conditional) ? (value_if_true) : (value_if_false)
  
  let T =2;

  T>1 ? console.log(true) : console.log(false);
let age = 12;
  let isAge = age == 18 ? console.log("you can book tickets") : console.log("Sorry! Access denied");