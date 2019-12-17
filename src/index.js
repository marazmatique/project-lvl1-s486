import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (description, getRoundData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nWhat is your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = roundsCount; i > 0; i -= 1) {
    const round = getRoundData();
    const roundQuestion = car(round);
    const answer = cdr(round);

    console.log(`\nQuestion: ${roundQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`\nLet's try again, ${userName}!\n`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`\nCongratulation, ${userName}!\n`);
};
