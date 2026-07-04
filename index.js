import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.BOT_TOKEN;

if (!token) {
  console.log("❌ BOT_TOKEN не найден");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

// ===== игроки (потом будем использовать для тегов) =====
const players = [
  "@yurtaev_a",
  "@julbick",
  "@vko22",
  "@natochinka",
  "@shtikovoy",
  "@vladomir30",
  "@nastya_mah",
  "@facesorokina",
  "@palepinkpollen",
  "@avepavl"
];

// ===== характер Ларика =====
const phrases = [
  "Волга сегодня спокойная. Но футбол — нет.",
  "Я фиксирую этот хаос.",
  "Крылья Советов бы такое не простили.",
  "Самара наблюдает молча.",
  "Слишком уверенно играете. Это подозрительно.",
  "Я здесь, чтобы судить, но без свистка.",
  "Ладья уже всё записала."
];

// ===== утилита случайных сообщений =====
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ===== /start =====
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
    "Ларик включился ⚽\nСледит за ЧМ и вашим позором."
  );
});

// ===== /larik =====
bot.onText(/\/larik/, (msg) => {
  bot.sendMessage(msg.chat.id, random(phrases));
});

// ===== имитация матча =====
// (пока без API — просто чтобы бот "жил")
setInterval(() => {
  const chance = Math.random();

  // редко пишет сам
  if (chance < 0.97) return;

  const message = random([
    "⚽ ГОЛ! (возможно, но это не точно)",
    "📺 VAR проверяет вашу адекватность",
    "🏁 Матч завершён. Кто-то счастлив, кто-то нет",
    "🔥 Идёт давление на ворота... как на жизнь в Самаре"
  ]);

  bot.sendMessage(process.env.CHAT_ID || 0, message);
}, 60000);

console.log("🤖 Ларик запущен...");// ===== ВАЖНО: фейковый сервер для Render =====
const app = express();

app.get("/", (req, res) => {
  res.send("Larik is alive");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("🌐 Web server running on port " + port);
});
