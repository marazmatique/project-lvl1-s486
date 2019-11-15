import getRandomInt from '../getRandomInt';
import { make, expression, answer } from '../makeConstructor';
import gamePlay from '..';

export const welcome = 'Welcome to the Brain Games!';

export const rules = 'What is the result of the expression?';

export const choiseOperator = (symbol = getRandomInt(1, 3)) => {
  switch (symbol) {
    case 1:
      return make('+', (a, b) => a + b);
    case 2:
      return make('-', (a, b) => a - b);
    case 3:
      return make('*', (a, b) => a * b);
    default:
      return 'somthing wrong';
  }
};

export const randomOperation = (num1 = getRandomInt(1, 25), num2 = getRandomInt(1, 25), oper =
choiseOperator()) => make(`${num1} ${expression(oper)} ${num2}`, answer(oper)(num1, num2));

export default () => gamePlay(welcome, rules, randomOperation);
