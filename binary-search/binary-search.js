'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	const leftArray = array.slice(0, array.length/2)
	const rightArray = array.slice(array.length/2)

	if (target > rightArray[0]) {
		for (let i = 0; i < rightArray.length; i++) {
			if (rightArray[i] === target) {
				return true
			}
		}
	} else {
		for (let i = 0; i < leftArray.length; i++) {
			if (leftArray[i] === target) {
				return true
			}
		}
	}
	return false
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
