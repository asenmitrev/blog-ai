const url =
  'https://plovdivcitycard.com/wp-content/uploads/2019/09/Your-Perfect-European-City-Break-Plovdiv-Bulgaria.png';

const fs = require('fs');
const client = require('https');
const path = require('path');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    try {
      client.get(url, res => {
        if (res.statusCode === 200) {
          res
            .pipe(fs.createWriteStream(path.join(__dirname, '../src/content', filepath)))
            .on('error', reject)
            .once('close', () => resolve(filepath));
        } else {
          // Consume response data to free up memory
          res.resume();
          reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = { downloadImage };
