const fs = require('fs/promises');

const readMd = (path) => fs.readFile(path, 'utf8');
const writeMd = (path, text) => fs.writeFile(path, text);

const main = async () => {
  console.log(await readMd('test.md'));
  await writeMd('test1.md', 'aaaaaaaaaaaaaaaa');
};

main();
