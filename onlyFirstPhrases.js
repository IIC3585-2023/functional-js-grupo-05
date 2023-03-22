const _ = require('lodash');

const takeFirstPhrases = (n, phrases) => _.take(phrases, n);
const curriedTakeFirstPhrases = _.curry(takeFirstPhrases);

const onlyFirstPhrases = (text, n) => {
  const takeFirstNPhrases = curriedTakeFirstPhrases(n);

  const operations = [
    (txt) => _.split(txt, '\n\n'),
    (paragraphs) => _.map(paragraphs, (paragraph) => _.split(paragraph, /(?<=\. )/g)),
    (phrasesPerParagraph) => _.map(phrasesPerParagraph, takeFirstNPhrases),
    (firstPhrases) => _.map(firstPhrases, (phrases) => _.join(phrases, '')),
    (firstPhrasesParagraphs) => _.join(firstPhrasesParagraphs, '\n\n'),
  ];
  const pipeline = _.flow(...operations);
  return pipeline(text);
};

module.exports = {
  onlyFirstPhrases,
};
