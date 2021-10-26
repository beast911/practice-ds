/**
 * This problem was asked by Facebook.

On a mysterious island there are creatures known as Quxes which come in three colors: red, green, and blue. One power of the Qux is that if two of them are standing next to each other, they can transform into a single creature of the third color.

Given N Quxes standing in a line, determine the smallest number of them remaining after any possible sequence of such transformations.
 */


// implement using stack

const map = {
  RB: 'G', BR: 'G',
  RG: 'B', GR: 'B',
  BG: 'R', GB: 'R'
}

const processQuxes = (list) => {
  const stack = [];
  const stabilizeStack = (stack) => {
    while (true) {
      if (stack.length < 2) {
        return;
      }
      const curr = stack.pop();
      const prev = stack.pop();
      if (curr === prev) {
        stack.push(prev);
        stack.push(curr);
        break;
      }
      const val = map[`${curr}${prev}`];
      stack.push(val);
    }
  }
  while (true) {
    if (list.length === 0) {
      break;
    }
    stack.push(list.shift());
    stabilizeStack(stack);
  }
  console.log(stack);
}

processQuxes(['R', 'G', 'B', 'G', 'B']);