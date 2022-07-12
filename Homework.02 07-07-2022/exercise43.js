// 43. Create a function that will find the employee by filter.
// Example: findEmployee(
//    employees,
//    {firstName: `Flemming`, lastName: `Scroggins`)
// );



import {employees} from "./index.js";

function findNameEmployees(listPeople, name) {
   let findPerson = listPeople.find(elem => {
      return elem.firstName === name
   })

   return `firstName: ${findPerson.firstName}, lastName: ${findPerson.lastName}`

}


console.log(findNameEmployees(employees, "Roxine"))