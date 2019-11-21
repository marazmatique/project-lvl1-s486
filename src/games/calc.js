import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const rules = 'What is the result of the expression?';

export const operList = '+-*';

export const choiseRandomFromList = (list = operList) => {
  const minOption = 0;
  const maxOption = list.length - 1;
  const toTakeSymbol = getRandomInt(minOption, maxOption);
  return list[toTakeSymbol];
};

export const randomOperation = (num1 = getRandomInt(1, 25), num2 = getRandomInt(1, 25), oper =
choiseRandomFromList()) => {
  switch (oper) {
    case '+':
      return make(`${num1} + ${num2}`, num1 + num2);
    case '-':
      return make(`${num1} - ${num2}`, num1 - num2);
    case '*':
      return make(`${num1} * ${num2}`, num1 * num2);
    default:
      return 'somthing wrong';
  }
};

export default () => gamePlay(rules, randomOperation);
