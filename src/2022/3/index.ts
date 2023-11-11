export function sumPrioritiesOfItemsInEachRucksack(input: string) {
  return input
    .split('\n')
    .map((items) => findPriority(findDuplicateItemInRucksack(items)))
    .reduce((p, c) => p + c, 0);
}

export function findDuplicateItemInRucksack(items: string): string {
  const first = items.slice(0, items.length / 2);
  const firstSet = new Set(first.split(''));
  const second = items.slice(items.length / 2, items.length);
  const secondSet = new Set(second.split(''));

  let duplicateItem = '';
  firstSet.forEach((v) => {
    duplicateItem = secondSet.has(v) ? v : duplicateItem;
  });

  return duplicateItem;
}

const alphabets = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export function findPriority(item: string): number {
  return alphabets.findIndex((v) => v === item) + 1;
}

// Part2
export function sumPrioritiesOfEachGroupBadge(input: string): number {
  return divideEachGroup(input)
    .map((groupItem) => findPriority(findCommonBadgeOfGroup(groupItem)))
    .reduce((p, c) => p + c, 0);
}

type GroupRucksack = [first: string, second: string, third: string];

export function divideEachGroup(input: string): GroupRucksack[] {
  return chunk(input.split('\n'), 3) as GroupRucksack[];
}

function chunk<T>(arrayData: T[], chunkSize: number): T[][] {
  return Array.from(
    { length: Math.ceil(arrayData.length / chunkSize) },
    (v, i) => arrayData.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
}

export function findCommonBadgeOfGroup(input: GroupRucksack) {
  const [firstSet, secondSet, thirdSet] = input.map(
    (i) => new Set(i.split(''))
  );
  let badge = '';
  firstSet.forEach((i) => {
    if (secondSet.has(i) && thirdSet.has(i)) badge = i;
  });
  return badge;
}
