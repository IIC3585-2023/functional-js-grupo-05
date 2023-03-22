const _ = require('lodash');

const maxLineLengthGen = (f) => ((n, line) => {
  if (line.length <= n) {
    return line;
  }
  const splitIndex = _.findLastIndex(line, (char, index) => char === ' ' && index <= n);
  if (splitIndex === -1) {
    throw new Error("It's not possible to split the line");
  }
  return `${line.slice(0, splitIndex)}\n${f(n, line.slice(splitIndex + 1, line.length))}`;
});

const Y = (f) => ((x) => x(x))((x) => f((y, z) => x(x)(y, z)));
const maxLineLength = Y(maxLineLengthGen);

const curriedMaxLineLength = _.curry(maxLineLength);

const maxLengthPerLine = (text, n) => {
  const NLineLength = curriedMaxLineLength(n);
  const lines = _.split(text, '\n');
  const newLines = _.map(lines, NLineLength);
  return _.join(newLines, '\n');
};

module.exports = maxLengthPerLine;
