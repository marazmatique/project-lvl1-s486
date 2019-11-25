import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import gamePlay from '..';

export const description = 'What number is missing in the progression?';

export const randomOperation = () => {
  const step = getRandomInt(1, 5);
  const lengthSequence = 15;
  const randomSecretPosition = getRandomInt(1, lengthSequence);
  let currentElement = getRandomInt(1, 20);
  let sequence = '';
  let answer = '';
  for (let i = 1; i <= lengthSequence; i += 1) {
    if (i === randomSecretPosition) {
      sequence = `${sequence} ..`;
      answer = currentElement;
      currentElement += step;
    }
    if (i !== randomSecretPosition) {
      sequence = `${sequence} ${currentElement}`;
      currentElement += step;
    }
  }
  return make(sequence, answer);
};

export default () => gamePlay(description, randomOperation);
