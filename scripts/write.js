const fs = require('node:fs/promises');
const fsSync = require('node:fs');
const path = require('path');
async function writeFile(filepath, content) {
  await fs.writeFile(path.join(__dirname, '../src/content', filepath), content);
}

function createDir(dirpath) {
  const fullPath = path.join(__dirname, '../src/content', dirpath);
  if (!fsSync.existsSync(fullPath)) {
    fsSync.mkdirSync(fullPath);
  }
}
module.exports = {
  writeFile,
  createDir,
};
