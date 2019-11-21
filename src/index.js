import readlineSync from 'readline-sync';
import { expression, answer } from './makeConstructor';

export default (rules, randomOperation) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('\nWhat is your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i += 1) {
    const round = randomOperation();
    console.log(`\nQuestion: ${expression(round)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${answer(round)}` !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer(round)}'.`);
      console.log(`\nLet's try again, ${userName}!\n`);
      break;
    }
    if (i === 3) {
      console.log('Correct!');
      console.log(`\nCongratulation, ${userName}!\n`);
      break;
    }
    console.log('Correct!');
  }
};
