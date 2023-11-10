export function detectMaximumCaloriesOfElf(input: string) {
  return Math.max(...aggregate(input));
}

export function detectSumOfTop3Calories(input: string) {
  return aggregate(input)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((p, c) => p + c);
}

function aggregate(input: string): number[] {
  return input.split('\n\n').map((calOfElfStr) =>
    calOfElfStr
      .split('\n')
      .map(Number)
      .reduce((p, c) => p + c)
  );
}
