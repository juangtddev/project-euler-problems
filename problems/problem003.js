/*

Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

*/

function largestPrimeFactor(number) {
    let maxPrime = 0;
    let i = 2;
    while (i * i <= number) {
        if (number % i !== 0) {
            i += 1;
        } else {
            number = Math.floor(number / i);
            maxPrime = i;
        }
    }
    return number;
}

console.log(largestPrimeFactor(600851475143));