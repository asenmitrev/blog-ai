const { OpenAI } = require('openai');
const AIClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getGptResponse(tools, messages) {
  const response = await AIClient.chat.completions.create({
    model: 'gpt-4-1106-preview',
    temperature: 0,
    tools: tools,
    messages: messages,
  });
  const responseMessage = response.choices[0].message;

  const toolCalls = responseMessage.tool_calls;
  return [toolCalls, responseMessage];
}

module.exports = {
  AIClient,
  getGptResponse,
};
