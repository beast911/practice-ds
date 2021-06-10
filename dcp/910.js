// dcp 910
/**
 * You are given an array of integers,
 * where each element represents the maximum number of steps that can be jumped going forward from that element.
 * Write a function to return the minimum number of jumps you must take in order to get from the start to the end of the array.
 * For example, given [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], you should return 2, as the optimal solution involves jumping from 6 to 5, and then from 5 to 9.
 */

// traverse entire array

const minimumJumps = (list, l, h) => {
  if (h === l) {
    return 0;
  }

  if (list[l] === 0) {
    return Number.MAX_SAFE_INTEGER;
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = l + 1; i <= l + list[l]; i++) {
    let jumps = minimumJumps(list, i, h);
    if (jumps + 1 < min && jumps !== Number.MAX_SAFE_INTEGER) {
      min = jumps + 1;
    }
  }
  return min;
};

console.log(minimumJumps([6, 2, 4, 0, 5, 1, 1, 4, 2, 9], 0, 9));
