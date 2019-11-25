import { cons as make } from '@hexlet/pairs';
import getRandomInt from '../getRandomInt';
import gamePlay from '..';

export const description = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

export const question = (num) => `${num}`;
export const answer = (num) => (isEven(num) ? 'yes' : 'no');

export const randomOperation = (num = getRandomInt(1, 100)) => make(question(num), answer(num));

export default () => gamePlay(description, randomOperation);
