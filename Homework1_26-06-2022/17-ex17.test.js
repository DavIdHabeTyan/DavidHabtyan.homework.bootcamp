describe("17. * Return array of courses including average evaluation for each course,", () => {


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


   function findAverageCourseScore(arr) {
      function cours(arr, id) {
         let findcourse = arr.filter(course => {
            return course.courseId === id
         })
         let score = findcourse.reduce((val, aggr) => {
            return aggr.score + val
         }, 0);
         let result = findcourse.filter(val => {
            return val.studentId === 1
         }).map(list => {
            return {
               courseId: list.courseId,
               courseName: list.courseName,
               score: score / findcourse.length
            }
         });
         return result;
      }

      return [
         cours(arr, 1), cours(arr, 2), cours(arr, 3)
      ]
   }


   test("Test 1.", () => {
      expect(findAverageCourseScore(evaluations)).toEqual([
            [
               {
                  courseId: 1,
                  courseName: 'JS Bootcamp',
                  score: 58.333333333333336
               }
            ],
            [
               {
                  courseId: 2,
                  courseName: 'JS Level 0',
                  score: 48.333333333333336
               }
            ],
            [
               {
                  courseId: 3,
                  courseName: 'JS Level 1',
                  score: 38.333333333333336
               }
            ]
         ]
      )
   });

});