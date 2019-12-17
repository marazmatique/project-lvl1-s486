import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const isDivided = (num, denominator) => num % denominator === 0;

const findGcd = (num1, num2) => {
  let result = Math.min(num1, num2);
  while (!isDivided(num1, result) || !isDivided(num2, result)) {
    result -= 1;
  }
  return result;
};

const getRoundData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = `${findGcd(num1, num2)}`;

  return make(question, answer);
};

export default () => playGame(description, getRoundData);
