import { it, expect } from 'vitest';
import {
  findPairsCountWholeIncluded,
  findPairsCountWithIntersection,
  hasIntersection,
  isSubset,
} from '.';

it('一方の課題にもう一方の課題が完全に含まれているペアの数を求められること', () => {
  // given
  const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
  // when
  const actual = findPairsCountWholeIncluded(input);
  // then
  expect(actual).toBe(2);
});

it('AとBの数値範囲が与えられた時、BがAの部分集合であるかを判定できる', () => {
  // given
  const base = '2-8';
  const input = '3-7';
  // when
  const actual = isSubset(base, input);
  // then
  expect(actual).toBe(true);
});
it.each([
  ['2-8', '3-7', true],
  ['4-6', '6-6', true],
  ['3-7', '2-8', false],
  ['6-6', '4-6', false],
])("isSubset('%s', '%s') -> %s", (base, input, expected) => {
  expect(isSubset(base, input)).toBe(expected);
});

// Part2
it('共通部分があるペアの数を求められること', () => {
  // given
  const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
  // when
  const actual = findPairsCountWithIntersection(input);
  // then
  expect(actual).toBe(4);
});

it('AとBの数値範囲が与えられた時、AとBが共通部分を持つかを判定できる', () => {
  // given
  const setA = '1-3',
    setB = '3-4';
  // when
  const actual = hasIntersection(setA, setB);
  // then
  expect(actual).toBe(true);
});
it.each([
  ['2-8', '3-7', true],
  ['4-6', '6-6', true],
  ['2-4', '5-6', false],
  ['5-6', '2-4', false],
  ['7-9', '5-7', true],
])("hasIntersection('%s', '%s') -> %s", (a, b, expected) => {
  expect(hasIntersection(a, b)).toBe(expected);
});
