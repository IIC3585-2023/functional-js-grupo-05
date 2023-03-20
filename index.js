const fs = require("fs/promises");
const _ = require("lodash");

const readMd = (path) => fs.readFile(path, "utf8");
const writeMd = (path, text) => fs.writeFile(path, text);

const spacesBeforeParagraph = (text, n) =>
  _.replace(text, /(?<=\S)\.(\r\n|\r|\n){2,}(?=[A-Z])/g, _.padEnd(".", n+2, "\n"));

const main = async () => {
  const md = await readMd("test.md");
  await writeMd("test1.md", spacesBeforeParagraph(md, 5));
};

main();
