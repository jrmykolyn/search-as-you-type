const CHARS = 'abcdefghijklmnopqrstuvwxyz';
const MAX_TERM_LENGTH = 5;
const MAX_WORD_LENGTH = 10;
const DEPARTMENTS = [
  'Cosmetics',
  'Electronics',
  'Groceries',
  'Health',
];

const getChar = () => {
  return CHARS.charAt(Math.floor(Math.random() * CHARS.length));
};

const getMockDepartment = () => {
  return DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)];
};

const getMockSuggestion = (term) => {
  return {
    term: getMockTerm(),
    in: getMockDepartment(),
  };
};

const getMockTerm = () => {
  return new Array(getTermLength())
    .fill(null)
    .map(getMockWord)
    .join(' ');
}

const getMockWord = () => {
  return new Array(getWordLength()).fill(null).map(getChar).join('');
};

const getTermLength = () => {
  return Math.ceil(Math.random() * MAX_TERM_LENGTH);
};

const getWordLength = () => {
  return Math.ceil(Math.random() * MAX_WORD_LENGTH);
};

module.exports = {
  getMockSuggestion,
};
