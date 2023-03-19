const fs = require('fs/promises');
const _ = require('lodash');

const readMd = (path) => fs.readFile(path, 'utf8');
const writeMd = (path, text) => fs.writeFile(path, text);

// Este regex hace match que todos los puntos que tienen texto diferente a un espacio antes
// y texto con mayuscula despues de un espacio despues
const addSpacesBeforePhrase = (text, n) => _.replace(text, /(?<=\S)\.\s(?=[A-Z])/g, _.padEnd('.', n));

const main = async () => {
  let md = await readMd('test.md');
  md = addSpacesBeforePhrase(md, 5);
  await writeMd('test1.md', md);
};

main();
