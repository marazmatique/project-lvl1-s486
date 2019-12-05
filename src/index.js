import readlineSync from 'readline-sync';
import { car as expression, cdr as answer } from '@hexlet/pairs';

const nRound = 3;

export default (description, getRoundData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nWhat is your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = nRound; i > 0; i -= 1) {
    const round = getRoundData();
    console.log(`\nQuestion: ${expression(round)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    switch (true) {
      case `${answer(round)}` !== userAnswer:
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer(round)}'.
        \nLet's try again, ${userName}!\n`);
        i = 0;
        break;
      case i === 1:
        console.log(`Correct!\n\nCongratulation, ${userName}!\n`);
        i = 0;
        break;
      default:
        console.log('Correct!');
    }
  }
};
