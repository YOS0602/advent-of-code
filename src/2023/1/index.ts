export function sumOfCalibrationValues(input: string): number {
  return input
    .split('\n')
    .map((line) => line.split('').filter((c) => !isNaN(Number(c))))
    .map((v) => Number(v[0] + v[v.length - 1]))
    .reduce((p, c) => p + c);
}

// Part2
export function sumOfCalibrationValuesEvenIfNumIsStr(input: string): number {
  return input
    .split('\n')
    .map(findDigits)
    .map((v) => v[0] * 10 + v[v.length - 1])
    .reduce((p, c) => p + c);
}

/**
 * 自力で解けなかったので下記を参照した。
 * @see https://devtails.xyz/adam/2023-advent-of-code-day-one
 */
const textDigits = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

export function findDigits(line: string): number[] {
  return line.split('').flatMap((c, i) => {
    const digits: number[] = [];

    if (!isNaN(Number(c))) {
      digits.push(Number(c));
    }

    textDigits.forEach((t, j) => {
      if (line.slice(i).startsWith(t)) {
        digits.push(j + 1);
      }
    });
    return digits;
  });
}

// テストは通るが、Answerが導けなかったもの↓
export function sumOfCalibrationValuesEvenIfNumIsStrOld(input: string): number {
  return input
    .split('\n')
    .map(convertNumStrToNumInStr)
    .map((line) => line.split('').filter((c) => !isNaN(Number(c))))
    .map((v) => Number(v[0] + v[v.length - 1]))
    .reduce((p, c) => p + c);
}

const mappings: Record<string, string> = {
  one: 'o1e',
  two: 't2o',
  three: 't3ree',
  four: 'f4ur',
  five: 'f5ve',
  six: 's6x',
  seven: 's7ven',
  eight: 'e8ght',
  nine: 'n9ne',
};

export function convertNumStrToNumInStr(str: string): string {
  const regex = new RegExp(Object.keys(mappings).join('|'), 'g');
  return str.replace(regex, (matched) => mappings[matched]);
}
