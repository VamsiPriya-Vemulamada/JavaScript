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


    /**
 * Step One: write the recursive function.
 * 
 * Here, we create a function that calculates
 * the factorial of a number, n. A factorial
 * is the product of all positive integers
 * less than or equal to the number, n.
 */
const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
  }
  
  /**
   * If we were to call the above with a number as
   * high as, say, 50,000, it would result in a stack
   * overflow.
   */
  
   /**
    * Step Two: modify the recursive function.
    * 
    * In order to trampoline the function, we must
    * return another function instead of calling
    * the recursive function itself. 
    * 
    * This prevents the function from being added 
    * directly to the call stack.
    */
   // for refference 
//    const facto = (n, a = 1) => {
//      if (n === 0) return a;
//      return () => facto(n - 1, n * a);
//    }
  
//    /**
//     * Step Three: create a trampoline function.
//     * 
//     * This function takes another function and a list
//     * of arguments, and uses a linear loop rather than
//     * traditional recursion to handle the function calls.
//     * 
//     * This prevents the stack overflow, while still
//     * maintaining the declarative approach provided by
//     * recursive functions.
//     */
//    const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
//   }
  
//   /**
//    * Now, we can call the factorial function with as high
//    * a number as we would like (as long as we don't run into
//    * other errors, like exceeding MAX_SAFE_INTEGER, or looping
//    * too many times...).
//    * 
//    * Unfortunately, both of these are the case here, but
//    * the principle of trampolining holds!
//    */
//   console.log(trampoline(facto(10000)))



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