const axiosCustomers = require("../../axios/customer.axios");
const axiosTeam = require("../../axios/team.axios");

function sendMessage(messageObj, messageText) {
  return axiosTeam.post("sendMessage", {
    chat_id: messageObj.chat.id,
    text: messageText,
  });
}

function sendMessageToOperator(chatId, messageText) {
  console.log(chatId);
  return axiosTeam.post("sendMessage", {
    chat_id: chatId,
    text: messageText,
  });
}

function handleMessage(messageObj) {
  const messageText = messageObj.text || "";

  if (messageText.startsWith("/")) {
    const command = messageText.substr(1);

    switch (
      command.toLowerCase() // Make commands case-insensitive
    ) {
      case "start":
        return sendMessage(
          messageObj,
          `👋 Hey there, I'm Horizon, your friendly travel buddy! Where are you dreaming of going? Let's chat about Istanbul (/istanbul) 🕌, Paris (/paris) 🥖, Rome (/rome) 🏛️, Tokyo (/tokyo) 🗼, or any other place that sparks your wanderlust! 😊`
        );
      case "istanbul":
        return sendMessage(
          messageObj,
          "Istanbul: A magical blend of history and culture! ✨  Starting at $500 per person."
        );
      case "maldives":
        return sendMessage(
          messageObj,
          "Maldives: Paradise found! 🏝️ Overwater bungalows and crystal-clear waters await! From $1000 per person."
        );
      case "paris":
        return sendMessage(
          messageObj,
          "Paris: Romance, croissants, and Eiffel Tower sunsets. 🗼  Starting at $700 per person."
        );
      case "rome":
        return sendMessage(
          messageObj,
          "Rome: Ancient wonders and delicious pasta! 🍝  Let's explore! From $600 per person."
        );
      case "tokyo":
        return sendMessage(
          messageObj,
          "Tokyo: A vibrant city where tradition meets technology! 🍣  From $900 per person."
        );
      default:
        return sendMessage(
          messageObj,
          "Hmm, I'm not quite sure I got that. Try asking me about a specific destination, or tell me what kind of experience you're looking for! 😊"
        );
    }
  } else {
    // Handle non-command messages (optional)
    return sendMessage(
      messageObj,
      "Tell me more about your dream trip! 🌎  I'm here to help you plan it."
    );
  }
}

module.exports = { handleMessage, sendMessageToOperator };
