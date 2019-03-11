const i = 60466175;

const generateName = () =>
  Math.random()
    .toString(36)
    .slice(2, 8);

console.log(generateName());
