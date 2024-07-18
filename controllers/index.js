const { handleMessage, sendMessageToOperator } = require("./lib/Telegram");

async function handler(req) {
  const { body } = req;
  if (body && body.message) {
    console.log(body);
    const messageObj = body.message;
    await handleMessage(messageObj);
  }
  return;
}

async function sendToOperator(req) {
  const { chatId, message } = req.body;
  if (req.body) {
    console.log(req.body);
    sendMessageToOperator(chatId, message);
  }
  return;
}

module.exports = { handler, sendToOperator };
