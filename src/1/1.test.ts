import { test,expect } from 'vitest';
import { data } from './testData'
import { detectMaximumCalories, divideCaloriesIndividually } from './1';

test('テストデータを読み込むことができる', () => {
  // given
  // when
  const actual = data;
  // then
  expect(actual).toBe(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`);
});

test('エルフが運んでいる最も多くのカロリーを見つけること', () => {
    
    const actual = detectMaximumCalories(data);
    expect(actual).toBe(24000);
})

test('与えられたinputを一人一人に分けられること', () => {
    const actual = divideCaloriesIndividually(`1

2`)
    expect(actual).toStrictEqual([[1],[2]])

    const actual2 = divideCaloriesIndividually(`2

3`)
    expect(actual2).toStrictEqual([[2],[3]])
})
