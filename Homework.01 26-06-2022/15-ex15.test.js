describe("15.  Return array of students that have any evaluation more than 60․", () => {

   const evaluations = [
      {
         studentId: 1, // Unique identifier for each student
         studentName: "John Doe",
         courseId: 1, // Unique identifier for each course
         courseName: "JS Bootcamp",
         score: 70
      },
      {
         studentId: 1, // Unique identifier for each student
         studentName: "John Doe",
         courseId: 2, // Unique identifier for each course
         courseName: "JS Level 0",
         score: 60
      },
      {
         studentId: 1, // Unique identifier for each student
         studentName: "John Doe",
         courseId: 3, // Unique identifier for each course
         courseName: "JS Level 1",
         score: 50
      },
      {
         studentId: 2, // Unique identifier for each student
         studentName: "Tom Colins",
         courseId: 1, // Unique identifier for each course
         courseName: "JS Bootcamp",
         score: 60
      },
      {
         studentId: 2, // Unique identifier for each student
         studentName: "Tom Colins",
         courseId: 2, // Unique identifier for each course
         courseName: "JS Level 0",
         score: 50
      },
      {
         studentId: 2, // Unique identifier for each student
         studentName: "Tom Colins",
         courseId: 3, // Unique identifier for each course
         courseName: "JS Level 1",
         score: 40
      },
      {
         studentId: 3, // Unique identifier for each student
         studentName: "Sarah Conor",
         courseId: 1, // Unique identifier for each course
         courseName: "JS Bootcamp",
         score: 45
      },
      {
         studentId: 3, // Unique identifier for each student
         studentName: "Sarah Conor",
         courseId: 2, // Unique identifier for each course
         courseName: "JS Level 0",
         score: 35
      },
      {
         studentId: 3, // Unique identifier for each student
         studentName: "Sarah Conor",
         courseId: 3, // Unique identifier for each course
         courseName: "JS Level 1",
         score: 25
      }
   ];

   function anyEvaluationScore(arr, score) {
      let result = arr.filter(student => {
         return student.score > score
      })
      return result
   }

   test("Test 1.", () => {
      expect(anyEvaluationScore(evaluations, 60)).toEqual([{
         studentId: 1,
         studentName: "John Doe",
         courseId: 1,
         courseName: "JS Bootcamp",
         score: 70,
      }]);
   });

});