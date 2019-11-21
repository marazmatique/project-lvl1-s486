import getRandomInt from '../getRandomInt';
import { make } from '../makeConstructor';
import gamePlay from '..';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const randomOperation = (num = getRandomInt(1, 100)) => {
  let answer = num === 1 ? 'no' : 'yes';
  for (let denom = 2; denom <= Math.sqrt(num); denom += 1) {
    if (num % denom === 0) {
      answer = 'no';
      break;
    }
  }
  return make(num, answer);
};

export default () => gamePlay(rules, randomOperation);
