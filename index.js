import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

// берём токен из .env
const token = process.env.BOT_TOKEN;

if (!token) {
  console.log("❌ BOT_TOKEN не найден в .env");
  process.exit(1);
}

// создаём бота
const bot = new TelegramBot(token, { polling: true });

// ===== характер Ларика =====
const phrases = [
  "Я на месте. Волга спокойна — значит пока без паники.",
  "Футбол пошёл. Я наблюдаю.",
  "Крылья Советов бы это не одобрили.",
  "Слишком много уверенности в чате. Подозрительно.",
  "Ладья всё фиксирует.",
  "Я здесь не ради хаоса. Но он обычно сам приходит.",
  "Самара молчит, но всё видит."
];

// ===== /start =====
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Ларик включился. Наблюдаю за матчами и вашим поведением."
  );
});

// ===== /larik =====
bot.onText(/\/larik/, (msg) => {
  const text = phrases[Math.floor(Math.random() * phrases.length)];
  bot.sendMessage(msg.chat.id, text);
});

// ===== редкие живые реакции =====
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // чтобы не спамил
  if (Math.random() > 0.07) return;

  const text = phrases[Math.floor(Math.random() * phrases.length)];
  bot.sendMessage(chatId, text);
});

console.log("🤖 Ларик запущен...");
