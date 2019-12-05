import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';
import isDivided from '../modulo';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let denom = 2; denom <= Math.sqrt(num); denom += 1) {
    if (isDivided(num, denom)) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const question = getRandomInt(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return make(question, answer);
};

export default () => playGame(description, getRoundData);
