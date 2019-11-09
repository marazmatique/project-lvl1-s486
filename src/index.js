import readlineSync from 'readline-sync';

export const userName = () => {
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
  console.log();
};

export default userName;
