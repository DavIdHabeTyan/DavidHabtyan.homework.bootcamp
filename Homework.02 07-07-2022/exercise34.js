
import {employees} from "./index.js";

function findTotalSalary(list) {
   let result = list.map(elem => {
      return elem.salary.replace("$", "")
   }).reduce((acc, val) => {
      return acc + (+val)

   },0)


   return result
}

console.log(findTotalSalary(employees))