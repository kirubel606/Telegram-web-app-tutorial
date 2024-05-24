# Getting Started with Telegram web app: React + Vite + Telegram Web App 🚀

Dive into the world of rapid development with this powerful template integrating React, Vite, and Telegram Web App seamlessly.

## **Step 1: Integration in a Snap!**

In your `index.html`, unleash the magic by simply adding this script tag right before the title:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <script src="https://telegram.org/js/telegram-web-app.js"></script>  🚀

    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
## Step 2
In your App.jsx make sure that you import useEffect and paste this because it wont work without it.
```javascript
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tele = window.Telegram.WebApp;
      tele.ready();
    }
  }, []);
```
  Also Go to bot Father and then create a bot and get the API token that it gives you




## Step 3
Then install telegraf for your bot using
``` 
npm i telegraf
```

## Step 4 : Bring Your Bot to Life
Then Add this code in your bot.js file and then run it using ```node bot.js```

```javascript
import { Telegraf } from "telegraf";

const TOKEN = "API TOKEN FROM BOT FATHER";
const bot = new Telegraf(TOKEN);
const web_link = "HTTPS LINK";

bot.start((ctx) =>
  ctx.reply("Welcome bro ", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();


```


