import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const description = 'What is the result of the expression?';

export const operationsList = '+-*';

export const choiseRandomFromList = (list = operationsList) => {
  const minOption = 0;
  const maxOption = list.length - 1;
  return list[getRandomInt(minOption, maxOption)];
};

export const question = (num1, num2, operation) => `${num1} ${operation} ${num2}`;
export const answer = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

export const randomOperation = (num1 = getRandomInt(1, 25), num2 = getRandomInt(1, 25), operation =
choiseRandomFromList()) => make(question(num1, num2, operation), answer(num1, num2, operation));

export default () => gamePlay(description, randomOperation);
