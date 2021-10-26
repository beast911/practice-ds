/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals && intervals.length === 0) {
        return [];
    }
    if (intervals.length === 1) {
        return intervals;
    }
    const result = [];
    result.push(intervals.shift());
    for (let int of intervals) {
        const lastRes = result[result.length - 1];
        if (lastRes[1] >= int[0]) {
            // there is overlap
            const leftBound = Math.min(lastRes[0], int[0]);
            const rightBound = Math.max(lastRes[1], int[1]);
            result.pop();
            result.push([leftBound, rightBound]);
        } else {
            result.push(int);
        }
    }
    console.log(result);
};

merge([[1,3],[4,10],[8,10],[15,18]]);