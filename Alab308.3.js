
// let num = prompt("please enter the number")
// for(i=num;i<=100; i++)
// {

//     if(i%3 == 0 && i%5 == 0 ){
//         console.log("fizz")
//     }
//     else if (i%5 == 0){
//         console.log("Buzz")
//     }
//     else if(i % 3 === 0){
//         console.log( "fizz buzz")}

//     else
//     console.log(i)

//     }

    function isPrime(number) {
        // Check if a number is prime
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;
        
        let i = 5;
        while (i * i <= number) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    isPrime(6)
    
    function nextPrime(n) {
        // Start searching for the next prime number greater than n
        let candidate = n + 1;
        while (true) {
            if (isPrime(candidate)) {
                console.log(`The next prime number after ${n} is ${candidate}.`);
                return candidate;
            }
            candidate++;
        }
    }

// Part 3

array1 = ["ID","Name","Occupation","Age"] // considered this as 1st array and decleared all the values in array1
console.log(array1.join(" ")) // join method concats all the values of array with provided parameter in join method

// decleared all the other values in nested array 
array2 = [ [42,"Bruce","Knight",41] ,[57,"Bob","FryCook",19], [ 63,"Blaine","QuizMaster",58] , [98,"Bill","DoctorsAssistant",26]]
// tried with 2 loop statements: i for loop is for the parent array where as j for loop is for child array elements
for(i=0; i<array2.length; i++)
{  
 for(j=0; j<array2[i].length; j++)
    {
        console.log(array2[i].join(" "))
    }
}

// part 3 second part 
array3 =["Index", "Mass(kg)", "Spring1(m)", "Spring2"]
console.log(array3.join(" "));
array4 = [ ["\n1",0.00,0.050,0.050], ["\n2",0.49,0.066,0.066], [ "\n3",0.98,0.087,0.080 ], [ "\n4",1.47,0.116,0.108], ["\n5",1.96,0.142,0.138], [ "\n6",2.45,0.166,0.158 ], [ "\n7",2.94,0.193,0.174], [ "\n8",3.43,0.204,0.192],[ "\n9",3.92,0.226,0.205], [ "\n10",4.41,0.238,0.232 ]]
for(i=0; i<array4.length; i++)
    {  
     for(j=0; j<array4[i].length; j++)
        {
            console.log(array4[i].join(" "))
        }
    }