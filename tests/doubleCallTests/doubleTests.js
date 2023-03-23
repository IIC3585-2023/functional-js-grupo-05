const path = require('path');
const {
  readMd,
  writeMd,
  addIndentBeforeParagraph,
  eachPhraseInAParagraph,
  addSpacesBeforePhrase,
  spacesBeforeParagraph,
} = require('../../index');
const {
  filterParagraphs,
  curriedGreater,
  curriedLesser,
} = require('../../filterParagraphs');
const { maxLengthPerLine } = require('../../maxLengthPerLine');
const { onlyFirstPhrases } = require('../../onlyFirstPhrases');

const test1 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = addSpacesBeforePhrase(addSpacesBeforePhrase(md, 5), 4);
  await writeMd(path.resolve(__dirname, './out1.txt'), out);
};
// Test 2 debería hacerse con la función de "Cada párrafo debe estar
// separado por n líneas (después de un punto aparte)"
const test2 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = spacesBeforeParagraph(spacesBeforeParagraph(md, 5), 6);
  await writeMd(path.resolve(__dirname, './out2.txt'), out);
};

const test3 = async () => {
  // read file relative
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = maxLengthPerLine(maxLengthPerLine(md, 30), 25);
  await writeMd(path.resolve(__dirname, './out3.txt'), out);
};

const test4 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = addIndentBeforeParagraph(addIndentBeforeParagraph(md, 5), 7);
  await writeMd(path.resolve(__dirname, './out4.txt'), out);
};

const test5 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = filterParagraphs(
    filterParagraphs(md, curriedGreater(3)),
    curriedGreater(5),
  );
  await writeMd(path.resolve(__dirname, './out5.txt'), out);
};

const test6 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = filterParagraphs(
    filterParagraphs(md, curriedLesser(5)),
    curriedLesser(3),
  );
  await writeMd(path.resolve(__dirname, './out6.txt'), out);
};

const test7 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = eachPhraseInAParagraph(eachPhraseInAParagraph(md));
  await writeMd(path.resolve(__dirname, './out7.txt'), out);
};

const test8 = async () => {
  const md = await readMd(path.resolve(__dirname, './in.txt'));
  const out = onlyFirstPhrases(onlyFirstPhrases(md, 5), 3);
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
