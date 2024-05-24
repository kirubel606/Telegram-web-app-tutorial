import { Telegraf } from "telegraf";

const TOKEN = "7198955661:AAGSyxQJNB5ryrNJtwgtdmaNVB4obs59tQA";
const bot = new Telegraf(TOKEN);
const web_link = "https://miniwebapptest.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome bro ", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();
