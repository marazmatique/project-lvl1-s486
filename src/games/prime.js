import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';
import isDivided from '../modulo';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = (num = getRandomInt(1, 100)) => {
  const question = `${num}`;
  let answer = 'yes';

  for (let denom = 2; denom <= Math.sqrt(num); denom += 1) {
    if (isDivided(num, denom)) {
      answer = 'no';
      break;
    }
  }

  return make(question, answer);
};

export default () => playGame(description, getRound);
