import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num) => {
  for (let denom = 2; denom <= Math.sqrt(num); denom += 1) {
    if (num % denom === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const question = (num) => `${num}`;
export const answer = (num) => isPrime(num);

export const randomOperation = (num = getRandomInt(1, 100)) => make(question(num), answer(num));

export default () => gamePlay(description, randomOperation);
