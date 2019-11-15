import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const welcome = 'Welcome to the Brain Games!';

export const rules = 'What number is missing in the progression?';

export const randomOperation = () => {
  const step = getRandomInt(1, 5);
  const randomSecretPosition = getRandomInt(1, 10);
  let currentNumber = getRandomInt(1, 20);
  let sequence = '';
  let answer = '';
  for (let i = 1; i <= 10; i += 1) {
    if (i === randomSecretPosition) {
      sequence += ' ..';
      answer = currentNumber;
      currentNumber += step;
    }
    if (i !== randomSecretPosition) {
      sequence += ` ${currentNumber}`;
      currentNumber += step;
    }
  }
  return make(sequence, answer);
};

export default () => gamePlay(welcome, rules, randomOperation);
