describe('11. Calculate the average of all payments', () => {
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

   function sumPaymentsAverage(arr) {
      let sumPayments = arr.map(val => {
         return val.payedAmount
      });
      let sumAverage = sumPayments.reduce((val, aggr, index) => {
         return (val + aggr) / index
      })
      return sumAverage
   }

   test('Test 1', () => {
      expect(sumPaymentsAverage(payments)).toEqual(1400)
   })
});