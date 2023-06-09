const path = require('path');
const {
  readMd,
  writeMd,
  addIndentBeforeParagraph,
  eachPhraseInAParagraph,
  addSpacesBeforePhrase,
  spacesBeforeParagraph,
} = require('../../utils');
const {
  filterParagraphs,
  curriedGreater,
  curriedLesser,
} = require('../../filterParagraphs');
const { maxLengthPerLine } = require('../../maxLengthPerLine');
const { onlyFirstPhrases } = require('../../onlyFirstPhrases');

// Test 1 debería hacerse con addSpacesBeforePhrase
const test1 = async () => {
  // read file relative
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = addSpacesBeforePhrase(md, 5);
  await writeMd(path.resolve(__dirname, './out1.txt'), out);
};
// Test 2 debería hacerse con la función de "Cada párrafo debe estar
// separado por n líneas (después de un punto aparte)"
const test2 = async () => {
  // read file relative
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = spacesBeforeParagraph(md, 5);
  await writeMd(path.resolve(__dirname, './out2.txt'), out);
};

const test3 = async () => {
  // read file relative
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = maxLengthPerLine(md, 25);
  await writeMd(path.resolve(__dirname, './out3.txt'), out);
};

const test4 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = addIndentBeforeParagraph(md, 5);
  await writeMd(path.resolve(__dirname, './out4.txt'), out);
};

const test5 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = filterParagraphs(md, curriedGreater(5));
  await writeMd(path.resolve(__dirname, './out5.txt'), out);
};

const test6 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = filterParagraphs(md, curriedLesser(5));
  await writeMd(path.resolve(__dirname, './out6.txt'), out);
};

const test7 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = eachPhraseInAParagraph(md);
  await writeMd(path.resolve(__dirname, './out7.txt'), out);
};

const test8 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = onlyFirstPhrases(md, 5);
  await writeMd(path.resolve(__dirname, './out8.txt'), out);
};

const main = async () => {
  await test1();
  await test2();
  await test3();
  await test4();
  await test5();
  await test6();
  await test7();
  await test8();
};

main();
