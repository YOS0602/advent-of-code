import { test, expect } from 'vitest';
import {
  calculateTotalScore,
  calculateTotalScoreBasedOnGuide,
  getScoreOfEachRound,
  getScoreOfEachRoundBasedOnGuide,
} from '.';

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

test('ultra top secret strategy guideに従ってじゃんけんをした結果を算出できること', () => {
  // given
  const input = `A Y
B X
C Z`;
  // when
  const actual = calculateTotalScoreBasedOnGuide(input);
  // then
  expect(actual).toBe(12);
});

test('ultra top secret strategy guideに従って、1ラウンドあたりのスコアを計算できること', () => {
  // given
  const input = 'A Y';
  // when
  const actual = getScoreOfEachRoundBasedOnGuide(input);
  // then
  expect(actual).toBe(4);
});
