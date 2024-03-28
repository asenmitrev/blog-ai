const https = require('https');
const url = `https://graph.facebook.com/v18.0/${process.env.FB_PAGE_ID}/feed?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`;

async function postToPage(link) {
  await post(url, {
    message: link,
    link: link,
    published: false,
    scheduled_publish_time: getRandomDate(),
  });
}
function post(url, data) {
  const dataString = JSON.stringify(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': dataString.length,
    },
    timeout: 100000, // in ms
  };

  return new Promise((resolve, reject) => {
    const req = https.request(url, options, res => {
      if (res.statusCode < 200 || res.statusCode > 299) {
        return reject(new Error(`HTTP status code ${res.statusCode}`));
      }

      const body = [];
      res.on('data', chunk => body.push(chunk));
      res.on('end', () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });

    req.on('error', err => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request time out'));
    });

    req.write(dataString);
    req.end();
  });
}

function getRandomDate() {
  // Get the current date
  const currentDate = new Date();

  // Set the start date to tomorrow
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() + 1);

  // Set the end date to 29 days from now
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 29);

  // Calculate a random timestamp between start and end dates
  const randomTimestamp =
    Math.random() * (endDate.getTime() - startDate.getTime()) + startDate.getTime();

  return Math.floor(randomTimestamp / 1000); // Convert to Unix timestamp (in seconds)
}

async function schedulePostsOnFacebook(postsToCreate) {
  for (const post of postsToCreate) {
    console.log('Creating post for ' + post);
    await postToPage(`https://aurora.xn--90aexm.com/${post}/`);
  }
}

module.exports = {
  schedulePostsOnFacebook,
};
