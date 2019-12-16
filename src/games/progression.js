import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';

const description = 'What number is missing in the progression?';

const lengthSequence = 10;

const getElement = (start, step, index) => start + step * index;

const getRoundData = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 5);
  const randomSecretPosition = getRandomInt(0, lengthSequence - 1);

  let sequence = '';
  const answer = `${getElement(start, step, randomSecretPosition)}`;

  for (let i = 0; i < lengthSequence; i += 1) {
    const nextElement = i === randomSecretPosition ? '..' : getElement(start, step, i);
    sequence = `${sequence} ${nextElement}`;
  }

  sequence = sequence.trim();

  return make(sequence, answer);
};

export default () => playGame(description, getRoundData);
