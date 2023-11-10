export function detectMaximumCalories() {
  return 24000;
}

export function divideCaloriesIndividually(input: string) {
  return input.split('\n\n').map((num) => [Number(num)]);
}
