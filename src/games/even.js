import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isDivided = (num, denominator) => num % denominator === 0;

const getRoundData = () => {
  const question = getRandomInt(1, 100);
  const answer = isDivided(question, 2) ? 'yes' : 'no';

  return make(question, answer);
};

export default () => playGame(description, getRoundData);
