// creating counter variable
// Part 1
let counter = 0;

function increment (){
    try{
    counter ++
    increment();
    }
    catch(e){
        console.log(counter);
    console.error(e);
// console is method which is used for outputs which has many methods inside in it, log is used for outputs where as error is used to display error

    }
}
increment();
// part 2
const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
  }

  // Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.

  // below is an example for iterative version rather we can wrire the same iterative in recurssive function
//   const reverse = (arr) => {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversed.push(arr[i]);
//     }
//     return reversed;
//   };
//   const array = [1, 2, 3, 4, 5];
//   console.log(reverse(array));

  // using spread operator
  const reverse = ([head, ...tail]) => 
    tail.length ? [...reverse(tail), head] 
    : [head];
  
  const array = [1, 2, 3, 4, 5];
  console.log(reverse(array));

// using the trampolined Version
// converting the  nested array to single array using flat
function flattenArray(arr) {
    return () => arr.reduce((acc, val) => 
        acc.concat(Array.isArray(val) ? flattenArray(val)() : val), 
    []);
}
// using tramploine function which returns the samevalue
function trampoline(fn) {
    while (typeof fn === 'function') {
        fn = fn();
    }
    return fn;
}
//  combining both functions in order to get the array
const trampolinedFlattenArray = (arr) => trampoline(flattenArray(arr));

const nestedArray = [1, [2, [3, [4, 5]]], 6];
console.log(trampolinedFlattenArray(nestedArray));