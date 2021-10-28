/**
 *
 * This problem was asked by Atlassian.

MegaCorp wants to give bonuses to its employees based on how many lines of codes they have written. They would like to give the smallest positive amount to each worker consistent with the constraint that if a developer has written more lines of code than their neighbor, they should receive more money.

Given an array representing a line of seats of employees at MegaCorp, determine how much each one should get paid.

For example, given [10, 40, 200, 1000, 60, 30], you should return [1, 2, 3, 4, 2, 1].
 */

const getPaid = (list) => {
    let sol = [];
    sol[0] = 1;
    for (let i = 1; i < list.length; i++) {
        if (list[i] > list[i - 1]) {
            sol[i] = sol[i - 1] + 1;
        } else {
            sol[i] = 1;
        }
    }
    sol[list.length - 1] = 1;
    for (let i = list.length - 2; i > -1; i--) {
        let nextVal;
        if (list[i] > list[i + 1]) {
            nextVal = sol[i + 1] + 1;
        } else {
            nextVal = 1;
        }
        sol[i] = Math.max(nextVal, sol[i]);
    }
    return sol;
}

console.log(getPaid([10000000000000, 400000000, 200000, 10000, 1000, 60, 30]));
