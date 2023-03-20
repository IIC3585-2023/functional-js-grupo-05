const fs = require('fs/promises');
const _ = require('lodash');
const { onlyFirstPhrases } = require('./onlyFirstPhrases');

const readMd = (path) => fs.readFile(path, 'utf8');
const writeMd = (path, text) => fs.writeFile(path, text);

// Este regex hace match que todos los puntos que tienen texto diferente a un espacio antes
// y texto con mayuscula despues de un espacio despues
const addSpacesBeforePhrase = (text, n) => _.replace(text, /(?<=\S)\.\s(?=[A-Z])/g, _.padEnd('.', n));

const eachPhraseInAParagraph = (text) => _.replace(text, /(?<=\S\.) *(?=[A-Z])/g, '.\n\n');

const main = async () => {
  let md = await readMd('test.md');
  // md = addSpacesBeforePhrase(md, 5);
  // md = eachPhraseInAParagraph(md);
  // await writeMd('test1.md', md);
  console.log(onlyFirstPhrases(md, 2));
};

main();
