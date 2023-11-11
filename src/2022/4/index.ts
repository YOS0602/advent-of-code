export function findPairsCountWholeIncluded(input: string): number {
  return findPairsCountService(input, (line) => {
    const [pair1, pair2] = line.split(',');
    return isSubset(pair1, pair2) || isSubset(pair2, pair1);
  });
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

function findPairsCountService(
  input: string,
  mapFunc: (line: string) => boolean
): number {
  return input
    .split('\n')
    .map(mapFunc)
    .filter((v) => v === true).length;
}

// Part2
export function findPairsCountWithIntersection(input: string) {
  return findPairsCountService(input, (line) => {
    const [pair1, pair2] = line.split(',');
    return hasIntersection(pair1, pair2);
  });
}

export function hasIntersection(a: string, b: string): boolean {
  const [aMin, aMax] = a.split('-').map(Number);
  const [bMin, bMax] = b.split('-').map(Number);

  if (aMax < bMin && aMax < bMax) {
    return false;
  }
  if (aMin > bMin && aMin > bMax) {
    return false;
  }
  return true;
}
