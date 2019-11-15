import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const welcome = 'Welcome to the Brain Games!';

export const rules = 'What is the result of the expression?';

export const operList = '+-*';

export const choiseRandomFromList = (list = operList) => {
  const minOption = 0;
  const maxOption = list.length - 1;
  const toTakeSymbol = getRandomInt(minOption, maxOption);
  return list[toTakeSymbol];
};

export const randomOperation = (num1 = getRandomInt(1, 25), num2 = getRandomInt(1, 25), oper =
choiseRandomFromList()) => make(`${num1} ${oper} ${num2}`, eval(`${num1} ${oper} ${num2}`));

export default () => gamePlay(welcome, rules, randomOperation);
