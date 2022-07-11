// 36. Using every() create a function that is checking if all employees have a salary of more than n

import {employees} from "./index.js";

function checkAllSalary(list, salary) {
   return list.every(elem => {
      return elem.salary >= salary
   })
}

console.log(checkAllSalary(employees, "$2")) /// true
console.log(checkAllSalary(employees, "$5")) /// false