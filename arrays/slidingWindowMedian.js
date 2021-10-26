var getMedian = function (list) {
    console.log(list);
    // sort the list
    const l = list.length;
    list.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    })
    let median = 0;
    // get median
    // check if length is even or odd
    if (l % 2 === 0) {
        // its even
        const lMed = list[(l / 2) - 1];
        const rMed = list[l / 2];
        median = Math.floor((lMed + rMed) / 2);
    } else {
        median = Math.floor(list[((l + 1) / 2) - 1]);
    }
    return median;
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    const finalArray = [];
    let rootIndex = 0;
    while (rootIndex + k <= nums.length) {
        let currentSet = nums.slice(rootIndex, rootIndex + k);
        finalArray.push(getMedian(currentSet));
        rootIndex++;
    }
    return finalArray;
};

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));