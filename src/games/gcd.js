import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '../gamePlay';

export const welcome = 'Welcome to the Brain Games!';

export const rules = 'Find the greatest common divisor of given numbers.';

const finderGcd = (a, b) => {
  let answer = Math.min(a, b);
  while (a % answer !== 0 || b % answer !== 0) {
    answer -= 1;
  }
  return answer;
};

export const randomOperation = (num1 = getRandomInt(1, 100), num2 = getRandomInt(1, 100)) => make(`${num1} ${num2}`,
  finderGcd(num1, num2));

export default () => gamePlay(welcome, rules, randomOperation);
