'use strict';

// Complete this algo
const binarySearch = (array, target, startIdx) => {

	// -----------------------------------------------
	// SLICE SOLUTION
	// -----------------------------------------------
	// const leftArray = array.slice(0, array.length/2)
	// const rightArray = array.slice(array.length/2)

	// if (target > rightArray[0]) {
	// 	for (let i = 0; i < rightArray.length; i++) {
	// 		if (rightArray[i] === target) {
	// 			return true
	// 		}
	// 	}
	// } else {
	// 	for (let i = 0; i < leftArray.length; i++) {
	// 		if (leftArray[i] === target) {
	// 			return true
	// 		}
	// 	}
	// }
	// return false

	// -----------------------------------------------
	// STARTING INDEX SOLUTION (EXTRA CREDIT)
	// -----------------------------------------------

		if (array[startIdx] > target) {
			for (let i = 0; i < startIdx; i++) {
				if (array[i] === target) return true;
			}
		} else {
			for (let i = startIdx; i < array.length; i++) {
				if (array[i] === target) return true;
			}
		}

	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

	// SEE STARTING INDEX SOLUTION

*/

module.exports = binarySearch
