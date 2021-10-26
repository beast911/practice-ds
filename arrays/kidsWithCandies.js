/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxOfArray = Math.max(...candies);
    const list = candies.map((k) => {
        if (k + extraCandies >= maxOfArray) {
            return true;
        }
        return false;
    });
    console.log(list);
    return list;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);