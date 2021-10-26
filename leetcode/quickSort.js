var quickSort = function(nums) {
    if (nums.length < 2) {
        return nums
    } else {
        const pivot = nums[0];
        // left is numbers less than pivot
        const right_array = nums.filter(numb => numb > pivot);
        const left_array = nums.filter(numb => numb <= pivot);
        return [quickSort(left_array), quickSort(right_array)];
    }
}

console.log(quickSort([3,2,1,5,6,4]));