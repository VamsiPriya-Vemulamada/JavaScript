function sumArry(arr) {
  // pass the inilaization value of something which will by itself converts into specific data type
  let sum = 0;
  for (i in arr) {
    sum += arr[i];
  }
  return sum;
}

function avgArry(arr) {
  // pass the inilaization value of something which will by itself converts into specific data type
  average = sum / arr.length;

  return average;
}
let numArray = [1, 20, 25, 19, 75];

sum = sumArry(numArray); // sum of the numbers in array
Average = avgArry(numArray); // Average of the numbers in array
console.log(sum);
console.log(Average);

function longestString(arr) {
  {
    let longest = "";
    for (i=0; i<arr.length;i++) {
      if (arr[i].length > longest.length) {
        longest =  arr[i];
      }
      
    }
    return longest;
  }
}

  function morethan3(arr) {
    let x = [];
    for (i in arr) {
      if (arr[i].length > 3) 
        x = x + arr[i];
    }
    return x;
  }

  let words = ["hey", "this", "is", "technical", "training"];

  let result = longestString(words); // the longest of the string among all of them
  let Greaterthan3 = morethan3(words); // the longest of the string with more that 3 letters
  console.log("The longest string is " + result);
  console.log("The longest string is with more than 3 letters is" + Greaterthan3);

// recursion: which always needs a function defination, base condition and the recurise call

function recursion(num){
    if (num == 0)
     return "";
  console.log(num);       
return recursion(num-1);
}

console.log(recursion(5));

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Who are you?', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });


