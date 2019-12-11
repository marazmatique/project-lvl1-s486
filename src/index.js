import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (description, getRoundData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nWhat is your name? ');
  console.log(`Hello, ${userName}!`);
  let gameEndMessage = `\nCongratulation, ${userName}!\n`;

  for (let i = roundsCount; i > 0; i -= 1) {
    const round = getRoundData();
    const expression = car(round);
    const answer = cdr(round);
    const userAnswer = readlineSync.question(`\nQuestion: ${expression}\nYour answer: `);

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      gameEndMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
      \nLet's try again, ${userName}!\n`;
      break;
    }
  }
  console.log(gameEndMessage);
};
