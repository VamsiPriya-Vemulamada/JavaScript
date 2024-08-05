console.log("hello");
 var my_var = "yay"; 
//  / used for older versions/
 const age =35; 
//  / used for constant values or not changable values /
 let x =10; 
//  / can be rechanged or can be used for any changable value /
//  / global variables and local variable /
console.log(typeof(x));
// typeof gives you what the variable data type is//
// string Operations like concatination, 
console.log(my_var + x);
//
console.log(my_var + typeof(x))
first_number = 16;
second_number = 8;
// airthmetic Operators
// add
console.log(first_number + second_number);
// sub 
console.log(first_number - second_number); 
// mul
console.log(first_number * second_number); 

console.log(first_number / second_number); 
// div which gives remainder
console.log(first_number % second_number); 

// increment and decrement( which is shortcuts)
first_number++ // adding one more number to the value
console.log(first_number) ;  // you have to call the increment value after incrementing not when you call it.
first_number--
 console.log(first_number); // sub less than one to the value
 // shortcuts
let newNumber = 9;
 newNumber -= 3; // newNumber is now equal to 6
 console.log(newNumber);
 newNumber /= 3; // newNumber is now equal to 2
 console.log(newNumber);
 newNumber *= 3; // newNumber is now equal to 6
 console.log(newNumber);
 newNumber %= 3; // newNumber is now equal to 0
 console.log(newNumber);

 // check out the comparssion and logical operators
 // String Concatentation
 console.log("hey" + " ya");
// String Access
const book ="Atomtic habit"
console.log(book[1]); // it is the index value of the variable string of book here
//string comparission
const first_letter = "a";
const second_letter = "b";
console.log(first_letter < second_letter); // passes true values, ususally it comparess with number of letters in it if not,then it will take the ascii values

// long paras below example

const frost =
	"Nature’s first green is gold, " +
	"Her hardest hue to hold. " +
	"Her early leaf’s a flower; " +
	"But only so an hour. " +
	"Then leaf subsides to leaf. " +
	"So Eden sank to grief, " +
	"So dawn goes down to day. " +
	"Nothing gold can stay. ";

console.log(frost);
// use / instead of +
const poem =
	"Nature’s first green is gold, \
Her hardest hue to hold. \
Her early leaf’s a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(poem);
// when you need an aprstope we need to use /n in th line
ls