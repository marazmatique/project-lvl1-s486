import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import gamePlay from '..';

const description = 'What is the result of the expression?';

const operationsList = '+-*';
const getRandomOperator = (list = operationsList) => {
  const minOption = 0;
  const maxOption = list.length - 1;
  return list[getRandomInt(minOption, maxOption)];
};

const getRound = (num1 = getRandomInt(1, 25), num2 = getRandomInt(1, 25),
  operator = getRandomOperator()) => {
  const question = `${num1} ${operator} ${num2}`;
  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      return false;
  }
  return make(question, answer);
};

export default () => gamePlay(description, getRound);
