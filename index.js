import TelegramBot from "node-telegram-bot-api";
import fs from "fs";

// ===== читаем токен из env.txt =====
let token = "";

try {
  const env = fs.readFileSync("./env.txt", "utf8");
  const match = env.match(/BOT_TOKEN=(.*)/);
  token = match ? match[1].trim() : null;
} catch (e) {
  console.log("❌ не найден env.txt");
}

if (!token) {
  console.log("❌ нет BOT_TOKEN в env.txt");
  process.exit(1);
}

// ===== создаем бота =====
const bot = new TelegramBot(token, { polling: true });

// ===== характер Ларика =====
const phrases = [
  "Я на месте. Волга спокойна, значит и вы держитесь.",
  "Футбол пошёл. Я наблюдаю.",
  "Крылья Советов бы это не одобрили.",
  "Слишком много уверенности в чате. Подозрительно.",
  "Ладья всё фиксирует.",
  "Я здесь не ради драмы. Но она обычно приходит сама.",
  "Самара смотрит молча."
];

// ===== старт =====
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Ларик включился. Наблюдаю за происходящим."
  );
});

// ===== тестовая команда =====
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
