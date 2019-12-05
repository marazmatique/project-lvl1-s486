import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import playGame from '..';

const description = 'What is the result of the expression?';

const operations = '+-*';

const getRandomOperator = () => {
  const minOption = 0;
  const maxOption = operations.length - 1;
  return operations[getRandomInt(minOption, maxOption)];
};

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
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

const getRoundData = () => {
  const num1 = getRandomInt(1, 25);
  const num2 = getRandomInt(1, 25);
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const answer = getAnswer(num1, num2, operator);

  return make(question, answer);
};

export default () => playGame(description, getRoundData);
