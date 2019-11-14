import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '../gamePlay';

export const welcome = 'Welcome to the Brain Games!';

export const rules = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const randomOperation = (num = getRandomInt(1, 100)) => make(`${num}`, isEven(num));

export default () => gamePlay(welcome, rules, randomOperation);
