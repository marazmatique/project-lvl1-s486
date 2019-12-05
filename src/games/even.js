import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';
import isDivided from '../modulo';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => isDivided(num, 2);

const getRoundData = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return make(question, answer);
};

export default () => playGame(description, getRoundData);
