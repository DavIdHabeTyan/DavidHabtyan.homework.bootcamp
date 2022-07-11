// 37. Using every() create a function that is checking if all  employees are engineers

import {employees} from "./index.js";

function checkIsAllEngineers(list){
   return list.every(elem => {
      return elem.isEngineer
   })
}

console.log(checkIsAllEngineers(employees))
