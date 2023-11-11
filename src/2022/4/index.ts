export function findPairsCountWholeIncluded(input: string): number {
  return input
    .split('\n')
    .map((line) => {
      const [pair1, pair2] = line.split(',');
      return isSubset(pair1, pair2) || isSubset(pair2, pair1);
    })
    .filter((v) => v === true).length;
}

/**
 * inputがbaseに包含されているかを判定する。
 * @param base 比較対象となる範囲
 * @example '2-8'
 * @param input
 * @example '3-7'
 * @returns inputはbaseの部分集合であるか
 */
export function isSubset(base: string, input: string): boolean {
  const baseNum = base.split('-').map(Number);
  const inputNum = input.split('-').map(Number);
  if (baseNum[0] <= inputNum[0] && baseNum[1] >= inputNum[1]) {
    return true;
  }
  return false;
}
