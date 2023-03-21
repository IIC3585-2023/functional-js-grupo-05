const _ = require('lodash');

const filterLargerSizePhrases = (n, paragraph) => _.size(paragraph.split(/(?<=\. )/g)) > n;
const filterSmallerSizePhrases = (n, paragraph) => _.size(paragraph.split(/(?<=\. )/g)) < n;

const curriedGreater = _.curry(filterLargerSizePhrases);
const curriedLesser = _.curry(filterSmallerSizePhrases);

const filterParagraphs = (text, filter) => {
  const paragraphs = _.split(text, /(?<=\n\n+)(?=[A-Z])/g);
  const paragraphsFiltered = _.filter(paragraphs, filter);
  return _.join(paragraphsFiltered, '');
};

module.exports = {
  filterParagraphs,
  curriedGreater,
  curriedLesser,
};

// Example to keep parapgraphs with more than n phrases: filterParagraphs(text, curriedGreater(n))
// Example to keep parapgraphs with less than n phrases: filterParagraphs(text, curriedLesser(n))
