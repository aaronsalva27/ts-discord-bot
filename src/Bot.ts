import * as dotenv from "dotenv";
import { Client, Message } from "discord.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const client = new Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", (message: Message) => {
  const prefix = process.env.PREFIX;

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    let ping = Date.now() - message.createdTimestamp + " ms";
    message.reply("🏓 Your ping is `" + `${ping}` + " ms`");
  }


});

client.login(process.env.TOKEN)