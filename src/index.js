import readlineSync from 'readline-sync';
import { expression, answer } from './makeConstructor';

export const gamePlay = (game) => {
  console.log();
  console.log(game.welcome);
  console.log(game.rules);
  console.log();
  const userName = readlineSync.question('What is your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i += 1) {
    const round = game.randomOperation();
    console.log();
    console.log(`Question: ${expression(round)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${answer(round)}` !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer(round)}'.`);
      console.log();
      console.log(`Let's try again, ${userName}!`);
      console.log();
      break;
    }
    if (i === 3) {
      console.log();
      console.log(`Congratulation, ${userName}!`);
      console.log();
      break;
    }
    console.log('Correct!');
  }
};
export default gamePlay;
