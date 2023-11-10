import { test, expect } from 'vitest';
import {
  findDuplicateItemInRucksack,
  findPriority,
  sumPrioritiesOfItemInEachRucksack,
} from '.';

test('各リュックサックの両方のコンパートメントに表示されるアイテムタイプの優先度の合計を求められる', () => {
  // given
  const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
  // when
  const actual = sumPrioritiesOfItemInEachRucksack(input);
  // then
  expect(actual).toBe(157);
});

test('リュックサックの両方のコンパートメントに表示される唯一の項目タイプを求められる', () => {
  // given
  const input = 'vJrwpWtwJgWrhcsFMMfFFhFp';
  // when
  const actual = findDuplicateItemInRucksack(input);
  // then
  expect(actual).toBe('p');
});

test.each([
  ['p', 16],
  ['L', 38],
  ['P', 42],
  ['v', 22],
  ['t', 20],
  ['s', 19],
])("項目タイプの優先順位を求められる('%s' -> %d)", (input, expected) => {
  expect(findPriority(input)).toBe(expected);
});
