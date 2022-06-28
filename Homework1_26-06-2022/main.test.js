// describe('1. Write a function that checks if the number is palindrome(121, 23432), dont use strings, and work with numbers. STRING))', () => {
//    function palindrome(numb) {
//       let number = numb;
//       let lastNumber;
//       let result = '';
//       while (number > 0) {
//          lastNumber = number % 10;
//          result += lastNumber;
//          number = (number - lastNumber) / 10
//       }
//       return numb === +result
//    }
//
//    test('Test 1. check number 121', () => {
//       expect(palindrome(121)).toEqual(true);
//    })
//
//    test('Test 2. check number 23432', () => {
//       expect(palindrome(23432)).toEqual(true);
//    })
//
//    test('Test 3. check number 122', () => {
//       expect(palindrome(122)).toEqual(false);
//    })
//
// });
//
//
// describe('1. Write a function that checks if the number is palindrome(121, 23432), dont use strings, and work with numbers.', () => {
//    function checkNumberIsPalindrome(numb) {
//       let number = numb;
//       let reversNUmb = 0;
//       while (number > 0) {
//          reversNUmb *= 10;
//          reversNUmb += number % 10;
//          number -= number % 10;
//          number /= 10;
//       }
//       return reversNUmb === numb
//    }
//
//    test('Test 1.', () => {
//       expect(checkNumberIsPalindrome(121)).toEqual(true)
//    });
//
//    test('Tets 2.', () => {
//       expect(checkNumberIsPalindrome(23432)).toEqual(true)
//    })
//
// });
//
// describe('2. Write a function that finds the first 3 "Happy" numbers (p.s  number is happy if the sum of the dividers(not including the number itself) is equal to the number itself i.e 6 = 1 + 2 + 3,  28 = 1 + 2 + 4 + 7 + 14).', () => {
//    function findNumberIsHappy(numb) {
//       let result = 0;
//       for (let i = 0; i < numb; i++) {
//          if (numb % i === 0) {
//             result += i
//          }
//       }
//       return result === numb;
//    }
//
//    test('Test 1. Happy Number', () => {
//       expect(findNumberIsHappy(6)).toEqual(true);
//    });
//
//    test('Test 2. Happy Number', () => {
//       expect(findNumberIsHappy(28)).toEqual(true);
//    })
//
//    test(' Test 3. Don`t Happy Number', () => {
//       expect(findNumberIsHappy(15)).toEqual(false);
//    })
//
// });
//
// describe(' Write a method that creates a new array with given values ', () => {
//    function creatNewArr(numb, letter) {
//       let result = [];
//       for (let i = 0; i < numb; i++) {
//          result.push(letter)
//       }
//       return result
//    }
//
//    test('Test 1.', () => {
//       expect(creatNewArr(3, 'a')).toEqual(['a', 'a', 'a'])
//    })
//
//    test('Test 2', () => {
//       expect(creatNewArr(4, 'b')).toEqual(['b', 'b', 'b', 'b'])
//    })
//
// });
//
//
// describe('Reverse. Write a function that reverts the input array.', () => {
//    function revers(arr) {
//       let result = [];
//       for (let i = 0; i < arr.length; i++) {
//          result.unshift(arr[i]);
//       }
//       return result
//    }
//
//    test('Test 1', () => {
//       expect(revers([1, 2, 3])).toEqual([3, 2, 1]);
//    })
//
//    test('Test 2', () => {
//       expect(revers([4, 5, 6])).toEqual([6, 5, 4])
//    })
//
// });
//
// describe('Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null', () => {
//    function clearArray(arr) {
//       let result = [];
//       for (let i = 0; i < arr.length; i++) {
//          if(arr[i] === 0) continue;
//          if(typeof arr[i] === 'number'){
//             result.push(arr[i])
//          }
//       }
//       return result
//
//    }
//
//    test('Test 1', () => {
//       expect(clearArray([0, 1, false, 2, undefined, '', 3, null])).toEqual([1, 2, 3]);
//    })
//
// })