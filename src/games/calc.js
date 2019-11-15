import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const welcome = 'Welcome to the Brain Games!';

export const rules = 'What is the result of the expression?';

export const randomOperation = (num1 = getRandomInt(1, 25), num2 = getRandomInt(1, 25)) => {
  switch (getRandomInt(1, 3)) {
    case 1:
      return make(`${num1} + ${num2}`, num1 + num2);
    case 2:
      return make(`${num1} - ${num2}`, num1 - num2);
    case 3:
      return make(`${num1} * ${num2}`, num1 * num2);
    default:
      return 'somthing wrong';
  }
};

export default () => gamePlay(welcome, rules, randomOperation);
