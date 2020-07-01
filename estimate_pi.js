const estimate_pi = (n = 1) => {
  const nums = { circle: 0, total: 0 };
  for (; n > 0; n--) {
    const [x, y] = [Math.random(), Math.random()];
    const distance = x ** 2 + y ** 2;
    distance <= 1 && nums.circle++;
    nums.total++;
  }
  return (4 * nums.circle) / nums.total;
};
const pi = estimate_pi(100000000)

console.log(pi)


