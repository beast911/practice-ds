/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
  let baseSatisfied = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      baseSatisfied += customers[i];
    }
  }

  let result = baseSatisfied;
  let start = 0;
  let end = minutes - 1;
  let currSatisfied = baseSatisfied;

  while (end < customers.length) {
    if (start === 0) {
      let inits = start;
      while (inits <= end) {
        if (grumpy[inits] === 1) {
          // include
          currSatisfied += customers[inits];
        }
        inits++;
      }
    } else {
      if (grumpy[start - 1] === 1) {
        currSatisfied -= customers[start - 1];
      }
      if (grumpy[end] === 1) {
        currSatisfied += customers[end];
      }
    }
    result = Math.max(result, currSatisfied);

    start++;
    end++;
  }
  return result;
};

console.log(maxSatisfied([ 1 ], [ 0 ], 1))
console.log(maxSatisfied([ 1, 0, 1, 2, 1, 1, 7, 5 ], [ 0, 1, 0, 1, 0, 1, 0, 1 ], 3));

console.log(maxSatisfied([ 2, 6, 6, 9 ], [ 0, 0, 1, 1 ], 1));