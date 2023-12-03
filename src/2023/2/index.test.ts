import { readInput, resolvePath } from '@/utils/readInput';
import { expect, it } from 'vitest';
import { Cube, isSetPlayable, serializeInput, sumPlayableGameID } from '.';

it('part1', () => {
  const input = readInput(resolvePath(__dirname, 'input.txt'));
  console.log(sumPlayableGameID(input));
});

const testInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

it('バッグに赤いキューブ 12 個、緑のキューブ 13 個、青のキューブ 14 個だけが入っていた場合にプレイ可能なゲームIDの合計値を求められること', () => {
  // given
  // when
  const actual = sumPlayableGameID(testInput);
  // then
  expect(actual).toBe(8);
});

it('それぞれのゲームのセットごとに使用されたキューブ数が構造化できること', () => {
  // given
  const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue`;
  // when
  const actual = serializeInput(input);
  // then
  expect(actual).toStrictEqual([
    [
      [4, 0, 3],
      [1, 2, 6],
      [0, 2, 0],
    ],
    [
      [0, 2, 1],
      [1, 3, 4],
      [0, 1, 1],
    ],
  ]);
});

it('1セットがプレイ可能であるとき、trueが返ること', () => {
  // given
  const bag: Cube = [10, 10, 10];
  const used: Cube = [10, 5, 0];
  // when
  const actual = isSetPlayable(bag, used);
  // then
  expect(actual).toBe(true);
});

it('1セットがプレイ不可能であるとき、falseが返ること', () => {
  // given
  const bag: Cube = [10, 10, 10];
  const used: Cube = [10, 5, 11];
  // when
  const actual = isSetPlayable(bag, used);
  // then
  expect(actual).toBe(false);
});
