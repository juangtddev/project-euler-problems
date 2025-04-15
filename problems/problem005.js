/*
Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) {
    let lcm = 1;
    for (let i = 2; i <= n; i++) {
        lcm = (lcm * i) / gcd(lcm, i);
    }
    return lcm;
}

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(smallestMult(20))