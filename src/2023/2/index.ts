export type Cube = [red: number, green: number, blue: number];
const bag: Cube = [12, 13, 14];

// part1
export function sumPlayableGameID(input: string): number {
  return serializeInput(input)
    .map((game, i) => {
      if (game.every((set) => isSetPlayable(bag, set))) {
        return i + 1;
      }
      return 0;
    })
    .reduce((p, c) => p + c, 0);
}

/**
 * 文字列を構造化する。
 * @example
 * ```ts
 * const serializedCubesSample: Cube[][] = [
 *   [
 *     [4, 0, 3], // 4 red, 0 green, 3 blue
 *     [1, 2, 6],
 *     [0, 2, 0],
 *   ],
 * ];
 * ```
 */
export function serializeInput(input: string): Cube[][] {
  return input.split('\n').map((line) =>
    line
      .split(':')[1] // Divide GameID & cubes
      .split(';') // Divide Each Game Sets
      .map((set) => {
        // Count how many cubes were used in a single set by the colors each
        const usedCubes: Cube = [0, 0, 0];
        set.split(',').forEach((cube) => {
          const [usedNum, color] = cube.trim().split(' ');
          if (color === 'red') {
            usedCubes[0] = Number(usedNum);
          } else if (color === 'green') {
            usedCubes[1] = Number(usedNum);
          } else if (color === 'blue') {
            usedCubes[2] = Number(usedNum);
          }
        });
        return usedCubes;
      })
  );
}

/**
 * 1セットごとにプレイ可能か判定する
 */
export function isSetPlayable(bag: Cube, usedCube: Cube): boolean {
  if (bag[0] < usedCube[0] || bag[1] < usedCube[1] || bag[2] < usedCube[2]) {
    return false;
  }
  return true;
}
