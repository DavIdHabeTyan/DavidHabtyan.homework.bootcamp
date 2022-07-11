//35. Using reduce create a function that is receiving a collection of employees and returns a string containing emails in the following format
// email1@example.com//email2@example.com//email3@example.com

import {employees} from "./index.js";


function returnStringEmail(list) {
   return list.reduce ((acc, elem) => {
      return elem.email + "//" + acc
   }, "")
}

console.log(returnStringEmail(employees))