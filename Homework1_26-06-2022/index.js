// // const payments = [
// //    {
// //       studentId: 1, // Unique identifier for each student
// //       studentName: "John Doe", // Name of the student
// //       payedAmount: 1600, // Amount payed with this transaction
// //       year: 2020, // The payment year
// //    },
// //    {
// //       studentId: 1, // Unique for each student
// //       studentName: "John Doe",
// //       payedAmount: 1500,
// //       year: 2021
// //    },
// //    {
// //       studentId: 1, // Unique for each student
// //       studentName: "John Doe",
// //       payedAmount: 1400,
// //       year: 2022
// //    },
// //    {
// //       studentId: 1, // Unique for each student
// //       studentName: "John Doe",
// //       payedAmount: 1300,
// //       year: 2023
// //    },
// //    {
// //       studentId: 2, // Unique for each student
// //       studentName: "Lu Kang",
// //       payedAmount: 1500,
// //       year: 2020
// //    },
// //    {
// //       studentId: 2, // Unique for each student
// //       studentName: "Lu Kang",
// //       payedAmount: 1400,
// //       year: 2021
// //    },
// //    {
// //       studentId: 2, // Unique for each student
// //       studentName: "Lu Kang",
// //       payedAmount: 1300,
// //       year: 2022
// //    },
// //    {
// //       studentId: 2, // Unique for each student
// //       studentName: "Lu Kang",
// //       payedAmount: 1200,
// //       year: 2023
// //    }
// // ];
// //
// // function findSumAmount(arr, id) {
// //    let listStudent = [];
// //    let findStudentForId = arr.filter(val => {
// //       if (val.studentId === id) return arr
// //    });
// //
// //    let sumAmountStudent = findStudentForId.map((val) => {
// //       return val.payedAmount
// //    }).reduce((val, aggr) => {
// //       return val + aggr
// //    });
// //
// //    let student = findStudentForId.filter(val => {
// //       if (val.year === 2023) {
// //          return {
// //             payedAmount: sumAmountStudent
// //          }
// //       }
// //    });
// //
// //    let resulte = student.map(val => {
// //       return {
// //          studentId: val.studentId,
// //          studentName: val.studentName,
// //          payedAmount: sumAmountStudent,
// //       }
// //    });
// //
// //
// //    return resulte
// // }
// //
// // console.log(findSumAmount(payments, 2))
//
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
// function anyEvaluationScore(arr, score){
//    let result = arr.filter(student => {
//       return student.score > score
//    })
//    return result
// }
//
// console.log(anyEvaluationScore(evaluations, 60))