
let num = prompt("please enter the number")
for( i=num;i<=100; i++)
{

    if(i%3 == 0 && i%5 == 0 ){
        console.log("fizz")
    }
    else if (i%5 == 0){
        console.log("Buzz")
    }
    else if(i % 3 === 0){
        console.log( "fizz buzz")}

    else
    console.log(i)

    }

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


