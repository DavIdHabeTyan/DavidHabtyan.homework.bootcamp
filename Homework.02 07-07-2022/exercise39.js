// 39. Write a function that will ensure that there are Females in the list of employees

import {employees} from "./index.js";

function isFemaleInList(list) {
   return list.some(female => {
      return female.gender === "Female"
   })
}

console.log(isFemaleInList(employees))