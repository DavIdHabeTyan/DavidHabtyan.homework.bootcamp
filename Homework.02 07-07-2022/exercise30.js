//30.Using the map write a function that returns an array containing only firstNames of all  employees


import {employees} from "./index.js";

function returnOnlyFirstName(list) {
   return list.map(elem => {
      return elem.firstName
   })
}

console.log(returnOnlyFirstName(employees))