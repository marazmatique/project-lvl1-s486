import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('What is your name? ');
  console.log();
  console.log(`Hello, ${name}!`);
};

export default userName;
