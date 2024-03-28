require('dotenv').config();
const config = require('./config.json');

const { getGptResponse } = require('./openai');
const { downloadImage } = require('./download');
const { searchGoogleImage } = require('./google');
const { translate } = require('./deepl');
const { writeFile, createDir } = require('./write');

const main = async city => {
  //   const city = getRandomCity();
  console.log('GENERATING WEB PAGE FOR CITY: ' + city);
  const messages = [
    { role: 'system', content: config.system_prompt },
    { role: 'user', content: city },
  ];
  console.log('GPT is generating markdown...');
  const [, responseMessage] = await getGptResponse(undefined, messages);

  let markdownContentEn = responseMessage.content;

  messages.push({
    role: responseMessage.role,
    content: responseMessage.content,
  });

  messages.push({
    role: 'user',
    content: config.excerpt_prompt,
  });
  console.log('GPT is generating excerpt...');

  const [, excerptResponseMessage] = await getGptResponse(undefined, messages);

  const imageSearches = [...markdownContentEn.matchAll(/{{.*}}/g)];

  const imgDirPath = `img/${city.toLowerCase()}-img/`;
  createDir(imgDirPath);
  for (let i = 0; i < imageSearches.length; i++) {
    const imageSearch = imageSearches[i];
    const searchTerm = imageSearch[0]
      ?.toLowerCase()
      .replaceAll('{{', '')
      .replaceAll('}}', '')
      .replaceAll(/search term:?/g, '');
    console.log(`Searching image for search term: ${searchTerm}`);

    const imageUrls = await searchGoogleImage(searchTerm);
    const filepath = `img/${city.toLowerCase()}-img/${i + 1}.png`;
    console.log(`Downloading image for search term: ${searchTerm}`);
    for (const imageUrl of imageUrls) {
      try {
        await downloadImage(imageUrl, filepath);
        break;
      } catch (e) {
        console.log('Downloading image failed, trying next image');
      }
    }
    if (imageUrls.length > 0) {
      markdownContentEn = markdownContentEn.replace(
        imageSearch[0],
        `![${searchTerm}](${filepath})`,
      );
    } else {
      markdownContentEn = markdownContentEn.replace(imageSearch[0], ``);
    }
  }

  console.log(`Translating document...`);
  const markdownContentBg = await translate(markdownContentEn);
  const cityNameBg = await translate(city);
  const excerpt = await translate(excerptResponseMessage.content);
  const date = getRandomDate();
  console.log(`Saving...`);

  const header = `---
layout: post
title: ${cityNameBg}
image: ${imgDirPath}1.png
author: [Aurora]
date: ${date}
draft: false
tags:
  - европа
excerpt: ${excerpt}
---`;

  const headerEn = `---
layout: post
title: ${city}
image: ${imgDirPath}1.png
author: [Aurora]
date: ${date}
draft: false
tags:
  - europe
excerpt: ${excerptResponseMessage.content}
---`;

  await writeFile(
    `${city.toLowerCase()}.md`,
    `${header}

  ${markdownContentBg}`,
  );

  await writeFile(
    `../../en-texts/${city.toLowerCase()}.md`,
    `${headerEn}

${markdownContentEn}`,
  );
};

async function runAllCities() {
  const cities = ['Seville'];

  for (const city of cities) {
    await main(city);
  }
}
runAllCities();

function getRandomDate() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return new Date()
    .toISOString()
    .replace(`${year}`, `${getRandomInt(2018, 2023)}`)
    .replace(`${month}`, `${getRandomInt(1, 12)}`.padStart(2, '0'));
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
