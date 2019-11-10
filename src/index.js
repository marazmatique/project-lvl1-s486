import readlineSync from 'readline-sync';

const gameHello = 'Welcome to the Brain Games!';
const gameRules = 'Answer "yes" if number even otherwise answer "no".';

export const userName = () => readlineSync.question('What is your name? ');

export const userAnswer = (randomNumber) => {
  console.log(`Question: ${randomNumber}`);
  return readlineSync.question('Your answer: ');
};

export const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random()
* (max - min + 1)) + min;

export const gamePlay = (numberOfRound) => {
  console.log();
  console.log(gameHello);
  console.log(gameRules);
  console.log();
  const name = userName();
  console.log(`Hello, ${name}!`);
  console.log();
  for (let i = 1; i <= numberOfRound; i += 1) {
    const digit = getRandomInt();
    const correctAnswer = digit % 2 === 0 ? 'yes' : 'no';
    const answer = userAnswer(digit);
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      console.log();
      break;
    }
    if (i === numberOfRound) {
      console.log();
      console.log(`Congratulation, ${name}!`);
      console.log();
      break;
    }
    console.log('Correct!');
  }
};
