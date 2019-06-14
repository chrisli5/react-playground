import leapYear  from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false; 
  expect(leapYear(input)).toBe(expectedOutput);
});

it('should be a leap year if divisible by 4, not 100', () => {
  const input = 1984;
  const expectedOutput = true;
  const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);
});