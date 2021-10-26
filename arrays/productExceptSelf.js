var productOfArray = function (arr) {
    if (arr.lenght === 0) {
        return 1;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    let prod = 1;
    for (let j = 0; j < arr.length; j++) {
        prod = prod * arr[j];
    }
    return prod;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let finalArray = [];
    for (let i = 0; i < nums.length; i++) {
        const leftS = nums.slice(0, i);
        const rightS = nums.slice(i + 1, nums.length);
        finalArray.push(productOfArray(leftS) * productOfArray(rightS));
    }
    console.log(finalArray);
    return finalArray;
};
