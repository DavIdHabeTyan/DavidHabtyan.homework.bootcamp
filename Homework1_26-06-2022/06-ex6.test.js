describe(" ", () => {


    function isContainAllElements(arr1, arr2) {
        let isEquals = true;
        for (let i = 0; i < arr2.length; i++) {
            let j = 0;
            for (; j < arr1.length; j++) {
                if (arr2[i] === arr1[j]) {
                    break;
                }
            }
            if (j === arr1.length) {
                isEquals = false;
                break;
            }
        }
        return isEquals;
    }


    test("Test 1", () => {
        expect(isContainAllElements([1, 2, 3, 4, 5, 6, 7, 9], [1, 2, 5, 3])).toEqual(true)

    })
})