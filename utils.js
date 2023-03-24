const fs = require('fs/promises');
const _ = require('lodash');

const readMd = (path) => fs.readFile(path, 'utf8');
const writeMd = (path, text) => fs.writeFile(path, text);

// Este regex hace match que todos los puntos que tienen texto diferente a un espacio antes
// y texto con mayuscula despues de un espacio despues
const addSpacesBeforePhrase = (text, n) => _.replace(text, /(?<=\S)\.[^\S\r\n]+(?=[A-Z])/g, _.padEnd('.', n + 1));

const spacesBeforeParagraph = (text, n) => _.replace(
  text,
  /(?<=\S)\.(\r\n|\r|\n){2,}(?=[A-Z])/g,
  _.padEnd('.', n + 2, '\n'),
);

const addIndentBeforeParagraph = (text, n) => _.repeat(' ', n)
  + _.trim(_.replace(text, /(?<=.\n\n)\s*(?=[A-Z])/g, _.padEnd(' ', n)), ' ');
const eachPhraseInAParagraph = (text) => _.replace(text, /(?<=\S\.)( | \s)(?=[A-Z])/g, '\n\n');

module.exports = {
  readMd,
  writeMd,
  addSpacesBeforePhrase,
  addIndentBeforeParagraph,
  eachPhraseInAParagraph,
  spacesBeforeParagraph,
};
