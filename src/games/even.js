import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';
import isEven from '../modulo';

const description = 'Answer "yes" if number even otherwise answer "no".';

const getRound = (num = getRandomInt(1, 100)) => {
  const question = `${num}`;
  const answer = isEven(num, 2) ? 'yes' : 'no';

  return make(question, answer);
};

export default () => playGame(description, getRound);
