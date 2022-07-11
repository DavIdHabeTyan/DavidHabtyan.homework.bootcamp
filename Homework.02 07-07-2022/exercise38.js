// 38. Write a function to check if all employees are Male

import {employees} from "./index.js";


function checkIsAllEmployeesMale(list, gender) {
   return list.every(elem => {
      return elem.gender === gender
   })
}

console.log(checkIsAllEmployeesMale(employees, "Male"))