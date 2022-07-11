//Create a function that will find the employee by the provided name

import {employees} from "./index.js";

function findPeople(listPeoples, name){
   const people = listPeoples.find(peopleName => {
      return peopleName.firstName === name
   })
   return people
}

console.log(findPeople(employees, "Roxine"))
