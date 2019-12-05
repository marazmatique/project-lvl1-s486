import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';

const description = 'What number is missing in the progression?';

const lengthSequence = 10;

const getRoundData = () => {
  const start = getRandomInt(1, 20);
  const step = getRandomInt(1, 5);
  const randomSecretPosition = getRandomInt(1, lengthSequence) - 1;
  let sequence = '';
  const answer = start + step * randomSecretPosition;

  for (let i = 0; i < lengthSequence; i += 1) {
    sequence = i === randomSecretPosition ? `${sequence} ..` : `${sequence} ${start + step * i}`;
  }

  return make(sequence, answer);
};

export default () => playGame(description, getRoundData);
