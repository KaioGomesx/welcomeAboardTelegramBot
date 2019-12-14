import TelegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_TOKEN || "your bot token";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", msg => {
  const chatId = msg.chat.id;
  const opts = { reply_to_message_id: msg.message_id };

  if (msg.new_chat_participant) {
    const gif = `https://media.giphy.com/media/FQyQEYd0KlYQ/source.gif`;
    bot.sendDocument(chatId, gif, opts);
  }
});
