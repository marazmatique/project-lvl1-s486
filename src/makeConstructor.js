export const make = (a, b) => (message) => {
  switch (message) {
    case 'expression':
      return a;
    case 'answer':
      return b;
    default:
      return 'something wrong';
  }
};

export const expression = (pair) => pair('expression');
export const answer = (pair) => pair('answer');
