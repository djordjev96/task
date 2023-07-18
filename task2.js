const maxXor = (lo, hi, k) => {
  if (lo < 1 || lo >= hi || hi > 104 || k < 1 || k > 10) {
    throw new Error("Constraints");
  }

  let max = 0;
  for (let i = lo; i <= hi; i++) {
    for (let j = i + 1; j <= hi; j++) {
      let xor = i ^ j;
      if (xor <= k && xor >= max) max = xor;
    }
  }
  return max;
};

console.log(maxXor(3, 5, 6));
