describe("12. * Calculate the total sum of payment amounts made by each student. We need to return an array that contains a list of information about students, including the total paid amount by the student. ", () => {
   const payments = [
      {
         studentId: 1, // Unique identifier for each student
         studentName: "John Doe", // Name of the student
         payedAmount: 1600, // Amount payed with this transaction
         year: 2020, // The payment year
      },
      {
         studentId: 1, // Unique for each student
         studentName: "John Doe",
         payedAmount: 1500,
         year: 2021
      },
      {
         studentId: 1, // Unique for each student
         studentName: "John Doe",
         payedAmount: 1400,
         year: 2022
      },
      {
         studentId: 1, // Unique for each student
         studentName: "John Doe",
         payedAmount: 1300,
         year: 2023
      },
      {
         studentId: 2, // Unique for each student
         studentName: "Lu Kang",
         payedAmount: 1500,
         year: 2020
      },
      {
         studentId: 2, // Unique for each student
         studentName: "Lu Kang",
         payedAmount: 1400,
         year: 2021
      },
      {
         studentId: 2, // Unique for each student
         studentName: "Lu Kang",
         payedAmount: 1300,
         year: 2022
      },
      {
         studentId: 2, // Unique for each student
         studentName: "Lu Kang",
         payedAmount: 1200,
         year: 2023
      }
   ];

   function findSumAmount(arr, id) {
      let listStudent = [];
      let findStudentForId = arr.filter(val => {
         if (val.studentId === id) return arr
      }).map((val) => {
         return val.payedAmount
      }).reduce((val, aggr) => {
         return val + aggr
      })

      let result = arr.filter(val => {
         if (val.year === 2023 && val.studentId === id) {
            return val
         }
      }).map(val => {
         return {
            studentId: val.studentId,
            studentName: val.studentName,
            payedAmount: findStudentForId,
         }
      });

      return result
   }

   test("Test 1.", () => {
      expect(findSumAmount(payments, 1)).toEqual([{
         studentId: 1,
         studentName: "John Doe",
         payedAmount: 5800,
      }])
   })

   test("Test 2.", () => {
      expect(findSumAmount(payments, 2)).toEqual([{
         studentId: 2,
         studentName: "Lu Kang",
         payedAmount: 5400
      }])
   })
})