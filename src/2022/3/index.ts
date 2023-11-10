export function sumPrioritiesOfItemInEachRucksack(input: string) {
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
