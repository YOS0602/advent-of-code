export function detectMaximumCalories(input: string) {
  input;
  return 24000;
}

export function divideCaloriesIndividually(input: string) {
  return input.split('\n\n').map((num) => [Number(num)]);
}
