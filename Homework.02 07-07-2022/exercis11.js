// 11. Create a function that will receive two collections of employees and adds the items of the second collection to the first collection. Use push method

function addedItemsInArray(items, items2) {
   items2.forEach(elem => {
      items.push(elem)
   })
   return items
}

console.log(addedItemsInArray([1, 2, 3, 4, 5], [6, 7, 8, 9]))