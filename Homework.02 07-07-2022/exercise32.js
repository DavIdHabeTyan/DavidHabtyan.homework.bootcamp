// 32. Write a function that will return only employees with salary greater than n

import {employees} from "./index.js";

function returnSalaryGreater(list, salary){

   return list.filter(elem => {
      return elem.salary > salary
   })
}

console.log(returnSalaryGreater(employees, "$3"))

