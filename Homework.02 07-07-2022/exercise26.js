// 26. Using sort, Write a JavaScript function to sort the collection of employees by their name

import {employees} from "./index.js";

function sortName(list) {
   let result = list.sort((a, b) => {
   return a.firstName.length - b.firstName.length

   })
return result
}

console.log(sortName(employees))