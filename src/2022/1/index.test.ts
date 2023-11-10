import { test, expect } from 'vitest';
import { detectMaximumCaloriesOfElf, detectSumOfTop3Calories } from './';

test('最も多くのエネルギーを運ぶエルフが持つ総カロリー量を見つけること', () => {
  // given
  const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
  // when
  const actual = detectMaximumCaloriesOfElf(input);
  // then
  expect(actual).toBe(24000);
});

test('上位 3 人のエルフが運ぶカロリーの合計を求められること', () => {
  // given
  const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
  // when
  const actual = detectSumOfTop3Calories(input);
  // then
  expect(actual).toBe(45000);
});
