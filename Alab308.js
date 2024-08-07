// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  console.log("===================================================");
  console.log("Part 1");
  console.log("===================================================");

// if the number is divisible by 5
const isDiv5= ((n1%5) || (n2%5)  || (n3%5)   || (n4%5)) == 0;
 console.log(isDiv5);
 //  Check if the first number is larger than the last. Cache the result in a variable.
const istask2 = (n1>n4) ==true;
console.log(istask2);
// Accomplish the following arithmetic chain:
sub = n2-n1;
mul = sub*n3;
rem = mul/n4;
console.log(rem);
//  isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const is_Over25 = ((n1) || (n2)  || (n3)  || (n4)) > 25;
console.log(is_Over25);
// Output of all checks
 console.log( "The four numbers are divisble by 5 which can be valid by "  + isDiv5 + "\n" + istask2 + " the first number is larger than the last" + "\n" + " the arithmetic chain or the remainder is" + rem + "\n"+  isOver25 + " all the number are not greater than 25" )


console.log("======================================================");
console.log("part2");
console.log("===============================================");


let speed = prompt("Please enter the speed");
let  milespergallon = prompt("please enetrer miles per gallon");

let total_budget = 175;
let average_fuel =3;
let total_miles = 1500;

function totalGallons(milespergallon)
{
  return total_miles / milespergallon;
}

function budget(speed) {
  let c = x * average_fuel;
  return c;
}

  
  
function time(a,b){
  return total_miles/speed;
}


let x = totalGallons(milespergallon);
console.log(x);

let z = budget(speed);
console.log(z); 
let s = z <= 175 ? console.log("Yay,You have the budget!"): console.log("Oh no! You're out of budget");

let y = time(speed,total_miles)
console.log(y);



