import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import gamePlay from '..';

const description = 'What number is missing in the progression?';

const lengthSequence = 10;

const isSecret = (a, b) => a === b;

const getRound = (start = getRandomInt(1, 20), step = getRandomInt(1, 5)) => {
  const getElement = (counter) => start + step * counter;
  const randomSecretPosition = getRandomInt(1, lengthSequence) - 1;
  let sequence = '';
  const answer = getElement(randomSecretPosition);

  for (let i = 0; i < lengthSequence; i += 1) {
    sequence = isSecret(i, randomSecretPosition) ? `${sequence} ..` : `${sequence} ${getElement(i)}`;
  }

  return make(sequence, answer);
};

export default () => gamePlay(description, getRound);
