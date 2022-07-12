function isPalindromeStr(str) {
   let convertStrToArr = str.split("")
   let result = [];
   while (0 < convertStrToArr.length) {
      result.push(convertStrToArr.pop())
   }
   return result.join("") === str
}

console.log(isPalindromeStr("asa"))