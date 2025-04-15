/*
Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
    let max = 10 ** n - 1;
    let min = 10 ** (n - 1);
    let maxPalindrome = 0;
    for (let i = max; i >= min; i--) {
        for (let j = i; j >= min; j--) {
            let product = i * j;
            if (isPalindrome(product) && product > maxPalindrome) {
                maxPalindrome = product;
            }
        }
    }
    return maxPalindrome;
}
function isPalindrome(num) {
    let str = num.toString();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


console.log(largestPalindromeProduct(3));