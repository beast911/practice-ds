/**
 * Given an array of numbers and a number k,
 * determine if there are three entries in the array which add up to the specified number k.
 * For example, given [20, 303, 3, 4, 25] and k = 49, return true as 20 + 4 + 25 = 49.
 */

//

const threeSum = (list, num) => {
  // sort the list
  const sortedList = list.sort((a, b) => a - b).filter((x) => x <= 49);
  
};


threeSum([20, 303, 3, 4, 25], 49);