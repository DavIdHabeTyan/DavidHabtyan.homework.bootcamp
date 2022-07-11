// --reverse()-- 28. Using reverse, write a function that checks if the string is a palindrome

function isPalindrome(str) {
   let revers = str.split("").reverse().join("");
   return revers === str
}

console.log(isPalindrome("adsa"))