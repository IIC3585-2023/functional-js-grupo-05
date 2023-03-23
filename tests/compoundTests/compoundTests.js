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

const test1 = async () => {
  // 3 y 4
  let md = await readMd(path.resolve(__dirname, './in.txt'));
  md = maxLengthPerLine(md, 20);
  md = addIndentBeforeParagraph(md, 3);
  await writeMd(path.resolve(__dirname, './out1.txt'), md);
};

const test2 = async () => {
  // 3 4 y 5
  let md = await readMd(path.resolve(__dirname, './in.txt'));
  md = maxLengthPerLine(md, 20);
  md = addIndentBeforeParagraph(md, 3);
  md = filterParagraphs(md, curriedGreater(3));
  await writeMd(path.resolve(__dirname, './out2.txt'), md);
};

const test3 = async () => {
  // 3 4 5 y 6
  let md = await readMd(path.resolve(__dirname, './in.txt'));
  md = maxLengthPerLine(md, 20);
  md = addIndentBeforeParagraph(md, 3);
  md = filterParagraphs(md, curriedGreater(3));
  md = filterParagraphs(md, curriedLesser(5));
  await writeMd(path.resolve(__dirname, './out3.txt'), md);
};

const test4 = async () => {
  // 8 y 7
  let md = await readMd(path.resolve(__dirname, './in.txt'));
  md = onlyFirstPhrases(md, 3);
  md = eachPhraseInAParagraph(md);
  await writeMd(path.resolve(__dirname, './out4.txt'), md);
};

// 8 7 4
const test5 = async () => {
  // 8 7 y 4
  let md = await readMd(path.resolve(__dirname, './in.txt'));
  md = onlyFirstPhrases(md, 3);
  md = eachPhraseInAParagraph(md);
  md = addIndentBeforeParagraph(md, 2);
  await writeMd(path.resolve(__dirname, './out5.txt'), md);
};

const test6 = async () => {
  //  3, 1 y 4
  let md = await readMd(path.resolve(__dirname, './in.txt'));
  md = maxLengthPerLine(md, 20);
  md = addSpacesBeforePhrase(md, 6);
  md = addIndentBeforeParagraph(md, 3);
  await writeMd(path.resolve(__dirname, './out1.txt'), md);
};

const test7 = async () => {
  // 3 4 2 5 y 6
  let md = await readMd(path.resolve(__dirname, './in.txt'));
  md = maxLengthPerLine(md, 20);
  md = addIndentBeforeParagraph(md, 3);
  md = spacesBeforeParagraph(md, 6);
  md = filterParagraphs(md, curriedGreater(3));
  md = filterParagraphs(md, curriedLesser(5));
  await writeMd(path.resolve(__dirname, './out3.txt'), md);
};

const main = async () => {
  await test1();
  await test2();
  await test3();
  await test4();
  await test5();
};

main();
