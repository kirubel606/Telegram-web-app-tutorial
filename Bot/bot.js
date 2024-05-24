import { Telegraf } from "telegraf";

const TOKEN = "Your Bot token from botfather ";
const bot = new Telegraf(TOKEN);
const web_link = "https://your_web_app_link.netlify.app/"; //make sure that the link is https

bot.start((ctx) =>
  ctx.reply("Welcome bro ", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();
