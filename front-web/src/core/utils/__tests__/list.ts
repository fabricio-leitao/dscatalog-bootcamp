import { generateList } from '../list';

test('should generate a list', () => {
  //ARRANGE
  const amount = 5;

  //ACT
  const result = generateList(amount);

  //ASSERT

  // entrada: 5
  // saída: [0, 1, 2, 3 ,4]
  expect(result).toEqual([0, 1, 2, 3, 4]);
});

test('should generate an empty list when amount is zero', () => {
  //ARRANGE
  const amount = 0;

  //ACT
  const result = generateList(amount);

  //ASSERT

  // entrada: 5
  // saída: [0, 1, 2, 3 ,4]
  expect(result).toEqual([]);
});
