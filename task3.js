const smallestDivisor = (nums, threshold) => {
  let divisor = 1;
  let minDivisor = 1;
  let minSum = 0;
  let maxDivisor = Math.max(...nums);
  for (i = divisor; i <= maxDivisor; i++) {
    let sum = 0;
    for (let j = 0; j <= nums.length; j++) {
      // on line 8 it should be < nums.length, not <= nums.length. sorry my bad
      sum += Math.ceil(nums[j] / i);
    }

    if (sum === threshold) {
      minDivisor = i;
      return minDivisor;
    }

    if (sum > minSum && sum <= threshold) {
      minSum = sum;
      minDivisor = i;
    }
  }

  return minDivisor;
};

const nums = [1, 2, 5, 9];
const threshold = 6;

console.log(smallestDivisor(nums, threshold));
