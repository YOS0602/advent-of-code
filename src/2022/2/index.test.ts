import { test, expect } from 'vitest';
import { calculateTotalScore, getScoreOfEachRound } from '.';

test('戦略に従ってじゃんけんの結果を算出できること', () => {
  // given
  const input = `A Y
B X
C Z`;
  // when
  const actual = calculateTotalScore(input);
  // then
  expect(actual).toBe(15);
});

test('1ラウンドのじゃんけん勝負のスコア計算ができること', () => {
  // given
  const input = 'A Y';
  // when
  const actual = getScoreOfEachRound(input);
  // then
  expect(actual).toBe(8);
});
