const a = (xs) => xs.reduce((acc, x) => acc + x, 0);

const b = (xs) => {
  let acc = 0;
  for (const x of xs) {
    acc += x;
  }
  return acc;
};

const c = (xs) => {
  let acc = 0;
  xs.forEach((x) => (acc += x));
  return acc;
};

const ys = [3, 2, 1];

const runTest = (label, fn) => {
  console.time(label);
  const result = fn();
  console.timeEnd(label);

  return result;
};

// runTest("c", () => c(ys));
// runTest("b", () => b(ys));
// runTest("a", () => a(ys));

const executionTime = (label, times, fn) => {
  let totalDiffs = 0;

  for (let i = 0; i < times; i++) {
    const start = Date.now();
    fn();
    const end = Date.now();
    const diff = end - start;
    totalDiffs += diff;
  }

  const avgExecutionTime = totalDiffs / times;
  console.log(`${label}: ${avgExecutionTime} ms`);

  return avgExecutionTime;
};

const ONE_MIL = 1_000_000;

executionTime("a", ONE_MIL, () => a(ys));
executionTime("b", ONE_MIL, () => b(ys));
executionTime("c", ONE_MIL, () => c(ys));

const sum = (xs) => xs.reduce((acc, x) => acc + x, 0);
console.log(sum([1, 2, 3, 45]));
