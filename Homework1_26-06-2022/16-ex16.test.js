describe("16. * Return array of students for whom the average evaluation is less than 40,", () => {


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

   function findAverageEvaluation(arr, id) {
      let findStudent = arr.filter(student => {
         return student.studentId === id
      })

      let averageScore = findStudent.reduce((vall, aggr) => {
         return aggr.score + vall
      }, 0);

         if(averageScore / findStudent.length < 40){
            return  findStudent.filter(people => {
               return people.studentId === id && people.courseId === 1
            }).map(val => {
               return {
                  studentId: val.studentId,
                  studentName: val.studentName,
                  courseId: val.courseId,
                  courseName: val.courseName,
                  score: averageScore / findStudent.length
               }
            })
         }

      return student
   }

   test('Test 1.', () => {
      expect(findAverageEvaluation(evaluations, 3)).toEqual([{
         studentId: 3,
         studentName: "Sarah Conor",
         courseId: 1,
         courseName: "JS Bootcamp",
         score: 35
      }])
   })

})
