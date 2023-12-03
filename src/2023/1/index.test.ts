import { describe, expect, it } from 'vitest';
import {
  convertNumStrToNumInStr,
  findDigits,
  sumOfCalibrationValues,
  sumOfCalibrationValuesEvenIfNumIsStr,
  sumOfCalibrationValuesEvenIfNumIsStrOld,
} from '.';
import { readInput, resolvePath } from '@/utils/readInput';
// import { readInput } from '../../utils/readInput';

it('キャリブレーション値の合計を求められること', () => {
  // given
  const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
  // when
  const actual = sumOfCalibrationValues(input);
  // then
  expect(actual).toBe(142);
});

// Part2
it('数字(ex."1")でも数字文字列(ex."one")でも、キャリブレーション値の合計を求められること', () => {
  // given
  const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
  // when
  const actual = sumOfCalibrationValuesEvenIfNumIsStr(input);
  // then
  expect(actual).toBe(281);
});

it('文字列中の数字や数字文字列を見つけられること', () => {
  // given
  const input = '4nineeightseven2';
  // when
  const actual = findDigits(input);
  // then
  expect(actual).toStrictEqual([4, 9, 8, 7, 2]);
});

it('Part2', () => {
  const input = readInput(resolvePath(__dirname, 'input.txt'));
  console.log(sumOfCalibrationValuesEvenIfNumIsStr(input));
});

describe('テストは通るが、Answerが導けなかったもの', () => {
  it('数字(ex."1")でも数字文字列(ex."one")でも、キャリブレーション値の合計を求められること', () => {
    // given
    const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
    // when
    const actual = sumOfCalibrationValuesEvenIfNumIsStrOld(input);
    // then
    expect(actual).toBe(281);
  });

  it(// ([
  // ['two1nine', 't2o1n9e'],
  // ['eightwothree', 'e8twot3e'],
  // ['abcone2threexyz', 'abco1e2t3exyz'],
  // ['xtwone3four', 'xt2one3f4r'],
  // ['4nineeightseven2', '4n9ee8ts7n2'],
  // ['zoneight234', 'zo1eight234'],
  // ['7pqrstsixteen', '7pqrsts6xteen'],
  // ])
  '文字列中の数字英単語を、頭と末尾付きの数字に置換できること', () => {
    // given
    const input = '4nineeightseven2';
    // when
    const actual = convertNumStrToNumInStr(input);
    // then
    expect(actual).toBe('4n9nee8ghts7ven2');
  });
});
