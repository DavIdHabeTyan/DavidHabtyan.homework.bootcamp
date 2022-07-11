//.Using the map, write a function to clone an array


import {employees} from "./index.js";

function creatCloneArray(arr) {
   let newArr =  arr.map(elem => {
      return elem
   })
   return newArr
}

console.log(creatCloneArray(employees))
