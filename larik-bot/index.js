{\rtf1\ansi\ansicpg1251\cocoartf2869
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww29200\viewh15500\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import TelegramBot from "node-telegram-bot-api";\
import dotenv from "dotenv";\
\
dotenv.config();\
\
const token = process.env.BOT_TOKEN;\
\
const bot = new TelegramBot(token, \{ polling: true \});\
\
// \uc0\u1087 \u1088 \u1086 \u1089 \u1090 \u1072 \u1103  \u1089 \u1072 \u1084 \u1072 \u1088 \u1089 \u1082 \u1072 \u1103  \u1073 \u1072 \u1079 \u1072  \u1092 \u1088 \u1072 \u1079 \
const phrases = [\
  "\uc0\u1053 \u1091  \u1095 \u1090 \u1086 , \u1087 \u1086 \u1075 \u1085 \u1072 \u1083 \u1080 .",\
  "\uc0\u1042 \u1086 \u1083 \u1075 \u1072  \u1089 \u1077 \u1075 \u1086 \u1076 \u1085 \u1103  \u1089 \u1087 \u1086 \u1082 \u1086 \u1081 \u1085 \u1072 \u1103 , \u1082 \u1072 \u1082  \u1074 \u1072 \u1096  \u1092 \u1091 \u1090 \u1073 \u1086 \u1083 .",\
  "\uc0\u1071  \u1089 \u1084 \u1086 \u1090 \u1088 \u1102  \u1079 \u1072  \u1074 \u1072 \u1084 \u1080 . \u1048 \u1085 \u1086 \u1075 \u1076 \u1072  \u1078 \u1072 \u1083 \u1077 \u1102 .",\
  "\uc0\u1050 \u1088 \u1099 \u1083 \u1100 \u1103  \u1073 \u1099  \u1101 \u1090 \u1086  \u1085 \u1077  \u1087 \u1088 \u1086 \u1089 \u1090 \u1080 \u1083 \u1080 .",\
  "\uc0\u1051 \u1072 \u1076 \u1100 \u1103  \u1074 \u1089 \u1105  \u1074 \u1080 \u1076 \u1077 \u1083 \u1072 .",\
  "\uc0\u1060 \u1091 \u1090 \u1073 \u1086 \u1083  \u1087 \u1086 \u1096 \u1077 \u1083 , \u1078 \u1080 \u1079 \u1085 \u1100  \u1086 \u1089 \u1090 \u1072 \u1085 \u1086 \u1074 \u1080 \u1083 \u1072 \u1089 \u1100 ."\
];\
\
// \uc0\u1089 \u1090 \u1072 \u1088 \u1090 \
bot.onText(/\\/start/, (msg) => \{\
  bot.sendMessage(\
    msg.chat.id,\
    "\uc0\u1071  \u1051 \u1072 \u1088 \u1080 \u1082 . \u1071  \u1079 \u1076 \u1077 \u1089 \u1100 , \u1095 \u1090 \u1086 \u1073 \u1099  \u1089 \u1083 \u1077 \u1076 \u1080 \u1090 \u1100  \u1079 \u1072  \u1101 \u1090 \u1080 \u1084  \u1094 \u1080 \u1088 \u1082 \u1086 \u1084 ."\
  );\
\});\
\
// \uc0\u1090 \u1077 \u1089 \u1090 \u1086 \u1074 \u1086 \u1077  \u1089 \u1086 \u1086 \u1073 \u1097 \u1077 \u1085 \u1080 \u1077 \
bot.onText(/\\/larik/, (msg) => \{\
  const text = phrases[Math.floor(Math.random() * phrases.length)];\
  bot.sendMessage(msg.chat.id, text);\
\});\
\
// \uc0\u1088 \u1077 \u1072 \u1082 \u1094 \u1080 \u1103  \u1085 \u1072  \u1083 \u1102 \u1073 \u1099 \u1077  \u1089 \u1086 \u1086 \u1073 \u1097 \u1077 \u1085 \u1080 \u1103  (\u1086 \u1095 \u1077 \u1085 \u1100  \u1084 \u1103 \u1075 \u1082 \u1086 , \u1088 \u1077 \u1076 \u1082 \u1086  \u1086 \u1090 \u1074 \u1077 \u1095 \u1072 \u1077 \u1090 )\
bot.on("message", (msg) => \{\
  const chatId = msg.chat.id;\
\
  // 10% \uc0\u1096 \u1072 \u1085 \u1089  \u1086 \u1090 \u1074 \u1077 \u1090 \u1072 , \u1095 \u1090 \u1086 \u1073 \u1099  \u1085 \u1077  \u1089 \u1087 \u1072 \u1084 \u1080 \u1083 \
  if (Math.random() > 0.1) return;\
\
  const text = phrases[Math.floor(Math.random() * phrases.length)];\
\
  bot.sendMessage(chatId, text);\
\});}