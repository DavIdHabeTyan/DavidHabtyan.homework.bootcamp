describe('9. Calculate the sum of all payments ', () => {
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

   function sumPayments(arr) {
      let sumAmount = arr.map(val => {
         return val.payedAmount;
      }).reduce((sum, aggr) => {
         return sum + aggr;
      });
      return sumAmount
   }

   test('Test 1', () => {
      expect(sumPayments(payments)).toEqual(11200)
   })

})