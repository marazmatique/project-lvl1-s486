import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';
import isDivided from '../modulo';

const description = 'Find the greatest common divisor of given numbers.';

const getRound = (num1 = getRandomInt(1, 100), num2 = getRandomInt(1, 100)) => {
  const question = `${num1} ${num2}`;
  let answer = Math.min(num1, num2);

  while (!isDivided(num1, answer) || !isDivided(num2, answer)) {
    answer -= 1;
  }

  return make(question, answer);
};

export default () => playGame(description, getRound);
