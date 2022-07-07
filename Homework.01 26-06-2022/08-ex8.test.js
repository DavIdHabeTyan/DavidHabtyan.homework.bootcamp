describe('8. Find the max payment', () => {

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
         year: 2023
      },
      {
         studentId: 2, // Unique for each student
         studentName: "Lu Kang",
         payedAmount: 1200,
         year: 2023
      }
   ];

   function findMaxStudentAmount(arr) {
      let maxAmount = arr.reduce((val, aggr) => {
         return (aggr.payedAmount < val ? val : aggr.payedAmount)
      },0)

      return maxAmount
   }

   test('Test 1', () => {
      expect(findMaxStudentAmount(payments)).toEqual(1600)
   })

})


