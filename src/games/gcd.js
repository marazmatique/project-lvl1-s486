import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  let answer = Math.min(a, b);
  while (a % answer !== 0 || b % answer !== 0) {
    answer -= 1;
  }
  return answer;
};

export const question = (num1, num2) => `${num1} ${num2}`;
export const answer = (num1, num2) => findGcd(num1, num2);

export const randomOperation = (num1 = getRandomInt(1, 100), num2 = getRandomInt(1, 100)) => (
  make(question(num1, num2), answer(num1, num2)));

export default () => gamePlay(description, randomOperation);
