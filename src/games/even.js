import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const rules = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = (num) => num % 2 === 0;

export const randomOperation = (num = getRandomInt(1, 100)) => make(`${num}`, isEven(num) ? 'yes' : 'no');

export default () => gamePlay(rules, randomOperation);
