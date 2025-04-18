/*
Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
*/

function specialPythagoreanTriplet(targetSum) {
    for (let a = 1; a < targetSum / 3; a++) {

        for (let b = a + 1; b < (targetSum - a) / 2; b++) {
            const c = targetSum - b - a;
            if (a ** 2 + b ** 2 === c ** 2) {
                return a * b * c;
            }
        }
    }
    return -1

}
console.log(specialPythagoreanTriplet(1000));