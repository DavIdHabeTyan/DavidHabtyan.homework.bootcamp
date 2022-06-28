// const evaluations = [
//    {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe",
//       courseId: 1, // Unique identifier for each course
//       courseName: "JS Bootcamp",
//       score: 70
//    },
//    {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe",
//       courseId: 2, // Unique identifier for each course
//       courseName: "JS Level 0",
//       score: 60
//    },
//    {
//       studentId: 1, // Unique identifier for each student
//       studentName: "John Doe",
//       courseId: 3, // Unique identifier for each course
//       courseName: "JS Level 1",
//       score: 50
//    },
//    {
//       studentId: 2, // Unique identifier for each student
//       studentName: "Tom Colins",
//       courseId: 1, // Unique identifier for each course
//       courseName: "JS Bootcamp",
//       score: 60
//    },
//    {
//       studentId: 2, // Unique identifier for each student
//       studentName: "Tom Colins",
//       courseId: 2, // Unique identifier for each course
//       courseName: "JS Level 0",
//       score: 50
//    },
//    {
//       studentId: 2, // Unique identifier for each student
//       studentName: "Tom Colins",
//       courseId: 3, // Unique identifier for each course
//       courseName: "JS Level 1",
//       score: 40
//    },
//    {
//       studentId: 3, // Unique identifier for each student
//       studentName: "Sarah Conor",
//       courseId: 1, // Unique identifier for each course
//       courseName: "JS Bootcamp",
//       score: 45
//    },
//    {
//       studentId: 3, // Unique identifier for each student
//       studentName: "Sarah Conor",
//       courseId: 2, // Unique identifier for each course
//       courseName: "JS Level 0",
//       score: 35
//    },
//    {
//       studentId: 3, // Unique identifier for each student
//       studentName: "Sarah Conor",
//       courseId: 3, // Unique identifier for each course
//       courseName: "JS Level 1",
//       score: 25
//    }
// ];
//
// function findLowestScore(arr) {
//  return  arr.filter(val => {
//      return val.score === 25
//   }).map(val => {
//      return val.studentName
//   })
//
// }
// console.log(findLowestScore(evaluations))


function findUniqueValues(arr) {

   let uniqueValues = [];
   for (let i = 0; i < arr.length; i++) {
      let count = 0
      for (let j = 0; j < arr.length; j++) {
         if (arr[i] === arr[j]) count++;

      }
      if (count === 1) {
         uniqueValues.push(arr[i])
      }
   }
   return uniqueValues
}

console.log(findUniqueValues(["d", 1, 2, 3, 5, 5, "d", "b", "g"]))