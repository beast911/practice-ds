/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let left = 0;
    let right = 0;
    let final = [];
    for (let i = 0; i < nums1.length + nums2.length; i++) {
        if (left === nums1.length) {
            // left has exhausted
            final = final.concat(nums2.splice(right));
            break;
        }
        if (right === nums2.length) {
            final = final.concat(nums1.splice(left));
            break;
        }
        if (nums1[left] <= nums2[right]) {
            final[i] = nums1[left];
            left++;
            continue;
        }
        if (nums1[left] > nums2[right]) {
            final[i] = nums2[right];
            right++;
            continue;
        }


    }
    console.log(final);
    if (final.length % 2 === 0) {
        let mid = final.length / 2;
        console.log((final[mid - 1] + final[mid]) / 2);
    } else {
        let mid = Math.floor(final.length / 2);
        console.log(final[mid]);
    }
};

findMedianSortedArrays([1,3], [2]);