import { playBingo, playBingoAndLose } from "./playBingo.js";

const boardMocks = [
  [
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ],
  [
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6],
  ],
  [
    [14, 21, 17, 24, 4],
    [10, 16, 15, 9, 19],
    [18, 8, 23, 26, 20],
    [22, 11, 13, 6, 5],
    [2, 0, 12, 3, 7],
  ],
];

describe("playBingo", () => {
  it("returns the correct position", () => {
    const result = playBingo(
      [
        7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
        18, 20, 8, 19, 3, 26, 1,
      ],
      boardMocks
    );

    expect(result).toEqual({
      winner: 2,
      score: 4512,
    });
  });

  it("works for a winning column", () => {
    const result = playBingo([3, 9, 19, 20, 14], boardMocks);

    expect(result).toEqual({
      winner: 1,
      score: 3626,
    });
  });
});

describe("playBingoAndLose", () => {
  it("gets the losing board", () => {
    const result = playBingoAndLose(
      [
        7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16,
        // Winning number of losing board
        13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1,
      ],
      boardMocks
    );

    expect(result).toEqual({
      winner: 1,
      score: 1924,
    });
  });
});
