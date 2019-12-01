import readlineSync from 'readline-sync';
import { car as expression, cdr as answer } from '@hexlet/pairs';

export default (description, getRound) => {
  let roundNumber = 3;
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nWhat is your name? ');
  console.log(`Hello, ${userName}!`);

  while (roundNumber > 0) {
    const round = getRound();
    console.log(`\nQuestion: ${expression(round)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    switch (true) {
      case `${answer(round)}` !== userAnswer:
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer(round)}'.
        \nLet's try again, ${userName}!\n`);
        roundNumber = 0;
        break;
      case roundNumber === 1:
        console.log(`Correct!\n\nCongratulation, ${userName}!\n`);
        roundNumber = 0;
        break;
      default:
        console.log('Correct!');
        roundNumber -= 1;
    }
  }
};
