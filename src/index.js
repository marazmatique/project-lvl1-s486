import readlineSync from 'readline-sync';
import {
  car as expression,
  cdr as answer,
}
  from '@hexlet/pairs';

export default (description, randomOperation) => {
  const roundNumber = 3;
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('\nWhat is your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= roundNumber; i += 1) {
    const round = randomOperation();
    console.log(`\nQuestion: ${expression(round)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (`${answer(round)}` !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer(round)}'.
      \nLet's try again, ${userName}!\n`);
    }
    console.log('Correct!');
  }
  return console.log(`\nCongratulation, ${userName}!\n`);
};
