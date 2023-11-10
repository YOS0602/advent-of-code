type OpponentShapes = 'A' | 'B' | 'C';
type MyShapes = 'X' | 'Y' | 'Z';
type Result = 'draw' | 'win' | 'lose';
type DataByShape = {
  A: number;
  B: number;
  C: number;
  score: number;
  choice: Result;
};
type Mappings = Record<MyShapes, DataByShape>;

// A Rock X
// B Paper Y
// C Scissors Z

const mappings: Mappings = {
  X: {
    A: 3, // 'draw',
    B: 0, // 'lose',
    C: 6, // 'win',
    score: 1,
    choice: 'lose',
  },
  Y: {
    A: 6, // 'win',
    B: 3, // 'draw',
    C: 0, // 'lose',
    score: 2,
    choice: 'draw',
  },
  Z: {
    A: 0, // 'lose',
    B: 6, // 'win',
    C: 3, // 'draw',
    score: 3,
    choice: 'win',
  },
};

const mappings2 = {
  A: {
    win: mappings.Y.score + 6, // Aに対して勝てる選択肢
    draw: mappings.X.score + 3,
    lose: mappings.Z.score, // Aに対して負ける選択肢
  },
  B: {
    win: mappings.Z.score + 6,
    draw: mappings.Y.score + 3,
    lose: mappings.X.score,
  },
  C: {
    win: mappings.X.score + 6,
    draw: mappings.Z.score + 3,
    lose: mappings.Y.score,
  },
};

export function calculateTotalScore(input: string) {
  return calculateService(input, getScoreOfEachRound);
}

export function getScoreOfEachRound(input: string) {
  const [opponentShape, myShape] = input.split(' ');
  const { score, ...rest } = mappings[myShape as MyShapes];
  const result = rest[opponentShape as OpponentShapes];
  return score + result;
}

// Part2
export function calculateTotalScoreBasedOnGuide(input: string) {
  return calculateService(input, getScoreOfEachRoundBasedOnGuide);
}

export function getScoreOfEachRoundBasedOnGuide(input: string) {
  const [opponentShape, myShape] = input.split(' ');
  const { choice } = mappings[myShape as MyShapes];
  return mappings2[opponentShape as OpponentShapes][choice];
}

function calculateService(
  input: string,
  func: (input: string) => number
): number {
  return input
    .split('\n')
    .map((round) => func(round))
    .reduce((p, c) => p + c, 0);
}
