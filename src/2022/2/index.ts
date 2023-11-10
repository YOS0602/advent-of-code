type OpponentShapes = 'A' | 'B' | 'C';
type MyShapes = 'X' | 'Y' | 'Z';
type DataByShape = {
  A: number;
  B: number;
  C: number;
  score: number;
};
type Mappings = Record<MyShapes, DataByShape>;

const mappings: Mappings = {
  X: {
    A: 3, // 'draw',
    B: 0, // 'lose',
    C: 6, // 'win',
    score: 1,
  },
  Y: {
    A: 6, // 'win',
    B: 3, // 'draw',
    C: 0, // 'lose',
    score: 2,
  },
  Z: {
    A: 0, // 'lose',
    B: 6, // 'win',
    C: 3, // 'draw',
    score: 3,
  },
};

export function calculateTotalScore(input: string) {
  return input
    .split('\n')
    .map((round) => getScoreOfEachRound(round))
    .reduce((p, c) => p + c, 0);
}

export function getScoreOfEachRound(input: string) {
  const [opponentShape, myShape] = input.split(' ');
  const { score, ...rest } = mappings[myShape as MyShapes];
  const result = rest[opponentShape as OpponentShapes];
  return score + result;
}
