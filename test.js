let list = ["Bryant", "Batholomew", "Ritchie", "Kaylyn", "Wilhelmina", "Rouvin", "Flemming", "Sallee", "Roxine", "Arabela"]

let number = [4.5 , 6, 123, 4,67 , 14, 65, 67 , 234,5 ]

function sorted (arr) {
   let result = arr.sort()


   return result
}

console.log(sorted(list))


let animals = [
   'cat', 'dog', 'elephant', 'bee', 'ant'
];

animals.sort((a, b) => {
   if (a > b)
      return -1;
   if (a < b)
      return 1;
   return 0;
});

console.log(animals);