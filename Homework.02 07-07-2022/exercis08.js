function isPalindromeStr(str) {
   let strToArr = str.split("")
   let result = [];
   while (0 < strToArr.length) {
      result.push(strToArr.pop())
   }
   return result.join("") === str
}

console.log(isPalindromeStr("David"))