const R = require("ramda");
const { runChallengeA, runChallengeB } = require("./code");
const { readInput } = require("../utils/readInput");

const main = async () => {
  const lines = await readInput("day9/input.txt");
  const input = lines.split("\n").map((l) => l.split("").map(Number));

  const resultA = runChallengeA(input);
  console.log(JSON.stringify(resultA));

  const resultB = runChallengeB(input);
  console.log(JSON.stringify(resultB));
};

main();
