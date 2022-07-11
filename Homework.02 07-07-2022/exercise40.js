// 40. Write a function that will ensure that there are engineers in the list of employees

import {employees} from "./index.js";

function isEngineersInList(list) {
   return list.some(elem => {
      return elem.isEngineer
   })
}

console.log(isEngineersInList(employees))