/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let prev = -1;
    let res = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i]) {
            prev = i;
        } else {
            let left = i;
            let right = i;
            while (right < seats.length) {
                if (seats[right]) {
                    break;
                }
                right++;
            }
            let lDist = prev === -1 ? seats.length : left - prev;
            let rDist = right === seats.length ? seats.length : right - i;
            res = Math.max(res, Math.min(lDist, rDist));
        }
    }
    return res;
};

console.log(maxDistToClosest([1, 0, 0, 0]));