/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let j = height.length - 1;
    let i = 0;
    let currentArea = Math.min(height[i], height[j]) * Math.abs(j - i);
    while (i < height.length) {
        if (i > j) {
            break;
        }
        let newArea = 0;
        if (height[i] < height[j]) {
            //move the left one
            if (height[i + 1] > height[i]) {
                newArea = Math.min(height[i + 1], height[j]) * Math.abs(j - (i+1));
            }
            i++;
        } else {
            // move the right one
            if (height[j - 1] > height[j]) {
                newArea = Math.min(height[i], height[j - 1]) * Math.abs((j - 1) - i);
            }
            j--;
        }
        if (currentArea < newArea) {
            currentArea = newArea;
        }
    }
    console.log(currentArea);
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);