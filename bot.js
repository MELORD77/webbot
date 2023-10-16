const { Telegraf } = require("telegraf");
const TOKEN = "6424318613:AAFaLAV9oWQKY_9y9PrevPeU7PGtV8H0lJQ";
const bot = new Telegraf(TOKEN);

const web_link =
  "https://652d9e40f633540d8b917fca--guileless-zabaione-bfd59e.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
