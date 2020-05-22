import * as dotenv from "dotenv";
import { Client, Message } from "discord.js";

dotenv.config();

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
    message.reply("Pong!")
  }
});

client.login(process.env.TOKEN)