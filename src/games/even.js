import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';

export const welcome = 'Welcome to the Brain Games!';

export const rules = 'Answer "yes" if number even otherwise answer "no".';

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const randomOperation = (num = getRandomInt(1, 100)) => make(`${num}`, isEven(num));
