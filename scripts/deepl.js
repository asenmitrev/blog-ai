const deepl = require('deepl-node');

const translator = new deepl.Translator(process.env.DEEPL_API_KEY);

const translate = async text => {
  const result = await translator.translateText(text, 'en', 'bg');
  return result.text;
};

module.exports = { translate };
