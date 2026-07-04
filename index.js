import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const token = process.env.BOT_TOKEN;

if (!token) {
  console.log("❌ BOT_TOKEN не найден");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

// ===== Ларик =====
const phrases = [
  "Я на месте. Волга спокойна.",
  "Футбол пошёл.",
  "Крылья Советов бы это не одобрили.",
  "Слишком много уверенности в чате.",
  "Ладья всё фиксирует.",
  "Самара смотрит."
];

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Ларик включился.");
});

bot.onText(/\/larik/, (msg) => {
  const text = phrases[Math.floor(Math.random() * phrases.length)];
  bot.sendMessage(msg.chat.id, text);
});

console.log("🤖 Ларик запущен...");

// ===== ВАЖНО: фейковый сервер для Render =====
const app = express();

app.get("/", (req, res) => {
  res.send("Larik is alive");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("🌐 Web server running on port " + port);
});
