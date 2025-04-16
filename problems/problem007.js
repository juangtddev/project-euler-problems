/*
Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function isPrime(num) {
    let exactDivision = 0;
    for (let i = 1; i <= num; i++) {
        let rest = num % i;
        if (rest === 0) {
            exactDivision++;
        }
        if (exactDivision > 2) {
            return false
        }
    }
    return true;
}

function nthPrime(n) {
    let primeNumbers = [1, 2];
    let i = 3;
    let isPrimeNumber = false;
    while (primeNumbers.length <= n) {
        isPrimeNumber = isPrime(i);
        if (isPrimeNumber) {
            primeNumbers.push(i);
        }
        i++;
    }

    return primeNumbers[primeNumbers.length - 1];
}

console.log(nthPrime(6));