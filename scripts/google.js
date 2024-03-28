const { google } = require('googleapis');

const customsearch = google.customsearch('v1');

async function searchGoogleImage(query) {
  const res = await customsearch.cse.list({
    cx: process.env.GOOGLE_SEARCH_ENGINE_ID,
    q: query,
    auth: process.env.GOOGLE_API_KEY,
    imgSize: 'xlarge',
    searchType: 'image',
    num: 10,
    fileType: 'png',
    excludeTerms: 'poster advert letters words writing copy map',
  });
  return res.data.items?.map(item => item.link) ?? [];
}

module.exports = {
  searchGoogleImage,
};
