import { test, expect } from 'vitest';
import {
  divideEachGroup,
  findCommonBadgeOfGroup,
  findDuplicateItemInRucksack,
  findPriority,
  sumPrioritiesOfEachGroupBadge,
  sumPrioritiesOfItemsInEachRucksack,
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
  const actual = sumPrioritiesOfItemsInEachRucksack(input);
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

// Part2

test('各グループにおけるバッジの優先度を合計できる', () => {
  // given
  const input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
  // when
  const actual = sumPrioritiesOfEachGroupBadge(input);
  // then
  expect(actual).toBe(70);
});

test('リュックサックの中身を、各グループごとに分けられること', () => {
  // given
  const input = `a
b
c
d
e
f`;
  // when
  const actual = divideEachGroup(input);
  // then
  expect(actual).toStrictEqual([
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
  ]);
});

test('1グループのバッジ(3人のエルフが持つ共通のitem)を見つけられること', () => {
  // given
  const input = ['abc', 'cde', 'cfg'] as [string, string, string];
  // when
  const actual = findCommonBadgeOfGroup(input);
  // then
  expect(actual).toBe('c');
});
